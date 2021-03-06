import MiniIframeRPC from 'mini-iframe-rpc';
import testBase from './test-base';


describe('internal-event-callbacks', function() {

    window.isParent = "parent";

    beforeEach((done) => {
        window.parentRPC = new MiniIframeRPC({'defaultInvocationOptions': {'timeout': 0, 'retryLimit': 0}});
        testBase.defaultBeforeEach({done, parentRPC: window.parentRPC, sandbox: 'allow-scripts allow-same-origin'});
    });

    afterEach((done) => {
        testBase.defaultAfterEach({done, parentRPC: window.parentRPC});
    });

    const cleanCallId = (message) => {
        let copy = Object.assign({}, message);
        copy.id = null;
        return copy;
    }


    it('calls onRegister handler on procedure registration', function(done) {
        testBase.ready.then(() => {
            const name = "afunction";
            const impl = (x) => x;
            window.parentRPC = new MiniIframeRPC({'eventCallbacks': {
                'onRegister': (_name, _impl) => {
                    expect(_name).toEqual(name);
                    expect(_impl).toEqual(impl);
                    done();
                }
            }});
            window.parentRPC.register(name, impl);
        });
    });

    it('calls onReceive handler on postMessage reception', function(done) {
        testBase.ready.then(() => {
            let listenToOnReceive = false;
            window.parentRPC.close();
            window.parentRPC = new MiniIframeRPC({'eventCallbacks': {
                'onReceive': (messageBody) => {
                    if (!listenToOnReceive) {
                        return;
                    }
                    expect(cleanCallId(messageBody)).toEqual({
                        id: null,
                        result: true
                    });
                    listenToOnReceive = false;
                    done();
                }
            }});
            testBase.onScriptRun('childRPC.register("callmeA", function() {return window.isChild;});').then(() => {
                listenToOnReceive = true;
                parentRPC.invoke(testBase.childWindow(), window.location.origin, "callmeA").then((result) => {
                    done(new Error('onReceive should be called before RPC call completes'));
                })
            });
        });
    });

    it('calls onSend handler on postMessage send', function(done) {
        testBase.ready.then((child) => {
            let listenToOnSend = false;
            window.parentRPC = new MiniIframeRPC({'eventCallbacks': {
                'onSend': (messageBody, targetWindow, targetOrigin) => {
                    if (!listenToOnSend) {
                        return;
                    }
                    expect(targetWindow).toBe(child);
                    expect(targetOrigin).toEqual(child.location.origin);
                    // update id in fullMessage which is random
                    expect(cleanCallId(messageBody)).toEqual({
                        id: null,
                        method: 'callmeB',
                        params: []
                    });
                    listenToOnSend = false;
                    done();
                }
            }});
            testBase.onScriptRun('childRPC.register("callmeB", function() {return window.isChild;});').then(() =>  {
                listenToOnSend = true;
                parentRPC.invoke(child, window.location.origin, "callmeB").then((result) => {
                    done(new Error('onSend should be called before RPC call completes'));
                }).then(
                    undefined,
                    function () {return 0;}); // ignore errors stemming from call not answered
            });
        });
    });

    it('calls onClose event callback on close()', function(done) {
        testBase.ready.then(() => {
            window.parentRPC = new MiniIframeRPC({'eventCallbacks': {
                'onClose': () => {
                    done();
                }
            }});
            window.parentRPC.close();
        });
    });

    it('calls onUnexpectedResponse handler on reception of responses without registered callbacks', function(done) {
        testBase.ready.then(() => {
            let listenToOnReceive = false;
            window.parentRPC = new MiniIframeRPC({'eventCallbacks': {
                'onReceive': (messageBody) => {
                    // change id so response cannot be matched with outgoing call.
                    if (!listenToOnReceive) {
                        return;
                    }
                    messageBody.id = "asdf";
                    listenToOnReceive = false;
                },
                'onUnexpectedResponse': (messageBody) => {
                     expect(messageBody).toEqual({
                        id: 'asdf',
                        result: true
                    });
                    done();
                }
            }});
            testBase.onScriptRun('childRPC.register("callmeC", function() {return window.isChild;});').then(() => {
                listenToOnReceive = true;
                parentRPC.invoke(testBase.childWindow(), window.location.origin, "callmeC").then((result) => {
                    done(new Error('onReceive should be called before RPC call completes'));
                })
            });
        });
    });

    it('retried request doesnt result in double execution of remote procedure', function(done) {
        const retryLimit = 1;
        let listen = false;
        let sent = [], received = [];
        let receivedResponses;

        testBase.ready.then(() => {
            window.parentRPC.close();
            receivedResponses = new Promise((resolve, reject) => {
                window.parentRPC = new MiniIframeRPC({
                    'eventCallbacks': {
                        'onSend': (messageBody, targetWindow, targetOrigin) => {
                            if (listen) {
                                sent.push(messageBody);
                            }
                        },
                        'onReceive': (messageBody) => {
                            if (listen && sent.length > 0 && sent[0].id === messageBody.id) {
                                received.push(messageBody);
                                if (received.length === 2) {
                                    listen = false;
                                    resolve();
                                }
                            }
                        }
                    }
                });
            });
            return testBase.onScriptRun(`
                (function() {
                    var timeouts = [120, 80];
                    window.counter=0;
                    window.childRPC.register("callmeD", function() {return new Promise(function(resolve, reject) {
                        var currentValue = window.counter;
                        window.setTimeout(
                            function() {return resolve(currentValue);},
                            timeouts[currentValue]);
                        window.counter++;
                        });
                    });
                })();`);
            }).then(() => {
                listen = true;
                parentRPC.invoke(testBase.childWindow(), null, "callmeD", [], {timeout: 100, retryLimit: retryLimit});
                return receivedResponses;
            }).then(
                (result) => {
                    // two requests sent (original and retry)
                    expect(sent.length).toEqual(2);
                    // two responses received
                    expect(received.length).toEqual(2);
                    // all have the same id
                    expect([sent[0].id, sent[1].id, received[0].id, received[1].id]).toEqual([sent[0].id, sent[0].id, sent[0].id, sent[0].id]);
                    // both responses have same result
                    expect([received[0].result, received[1].result, 0]).toEqual([0,0,0]);
                    // counter has only been incremented once
                    expect(testBase.childWindow().counter).toEqual(1);
                    done();
                });
    });

});
