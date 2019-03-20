const MiniIframeRPC = require('mini-iframe-rpc').MiniIframeRPC;
const TestBase = require('./test-base.js');

describe('mini-iframe-rpc', function() {
    window.isParent = "parent";

    beforeEach(() => {
        window.parentRPC = new MiniIframeRPC({'defaultInvocationOptions': {'timeout': 0, 'retryLimit': 0}});
        TestBase.defaultBeforeEach({parentRPC: window.parentRPC});
    });

    afterEach(() => {
        TestBase.defaultAfterEach({parentRPC: window.parentRPC});
    });

    it('can invoke registered procedures (parent calling child)', function(done) {
        TestBase.ready.then((child) => {
            TestBase.onScriptRun('childRPC.register("callme", () => window.isChild);').then(() => 
                parentRPC.invoke(child, null, "callme").then((result) => {
                    expect(result).toBe("child");
                    done();
                })
            );
        });
    });

    it('can invoke registered procedures (child calling parent)', function(done) {
        TestBase.ready.then(() => {
            parentRPC.register('callme', (callerName) => {
                expect(window.isParent).toBe("parent");
                expect(callerName).toBe("child");
                done();
            });
            TestBase.runChildScript(`childRPC.invoke(window.parent, null, "callme", [window.isChild])`);
        });
    });

    it('can properly pass complex arguments', function(done) {
        TestBase.ready.then((child) => TestBase.onScriptRun(`
            const recursiveReduce = (fn, args) => 
            args.map(arg => {
                if (arg instanceof Array) {
                    return recursiveReduce(fn, arg);
                }
                return arg;
            }).reduce(fn);
            window.childRPC.register("add", (...numbers) => recursiveReduce((a,b) => a+b, numbers)); 
            `)
        ).then(() => parentRPC.invoke(TestBase.childWindow(), null, "add", [1,2,[1,2,3],4,5])
        ).then((result) => {
            expect(result).toBe(18);
            done();
        });
    });

    it('can return complex parameters', function(done) {
        const obj = {"a": 1, "b": [1,2,3], "c": false};
        TestBase.ready.then((child) => {
            TestBase.onScriptRun(`
                window.childRPC.register('callme', () => {
                    return ${JSON.stringify(obj)};
                });
            `
            ).then(() => parentRPC.invoke(child, null, "callme")
            ).then((result) => {
                expect(result).toEqual(obj);
                done();
            });
        });
    });

    it('can handle promise responses', function(done) {
        TestBase.ready.then((child) => {
            TestBase.onScriptRun(`window.childRPC.register('callme', () => Promise.resolve(true));`
            ).then(() => parentRPC.invoke(child, null, "callme")
            ).then((result) => {
                expect(result).toBe(true);
                done();
            });
        });
    });

    it('rejects response promise if called function doesnt exist', function(done) {
        TestBase.ready.then((child) => {
            parentRPC.invoke(child, null, "unregistered_function").then(
                (result) => done(new Error('Promise should not be resolved')),
                (reject) => {
                    expect(reject.cause.message).toEqual("Remote procedure 'unregistered_function' not registered in remote RPC instance.");
                    expect(reject.cause.name).toEqual("ProcedureNotFoundError");
                    done();
                });
        });
    });

    it('unregisters a procedure when reregistered with null implementation ', function(done) {
        TestBase.ready.then(
            (child) => TestBase.onScriptRun('childRPC.register("callme", () => window.isChild);')
            // first call OK, because procedure is registered
        ).then(() => parentRPC.invoke(TestBase.childWindow(), null, "callme")
        ).then((result) => expect(result).toEqual('child')
        ).then(() => TestBase.onScriptRun('childRPC.register("callme", null);')
        ).then(() => parentRPC.invoke(TestBase.childWindow(), null, "callme")
        ).then(
            (result) => done(new Error('Promise should not be resolved (result: '+result+')')),
            (reject) => {
                expect(reject.name).toEqual('InvocationError');
                expect(reject.procedureName).toEqual('callme');
                expect(reject.cause.name).toEqual("ProcedureNotFoundError");
                expect(reject.cause.message).toEqual("Remote procedure 'callme' not registered in remote RPC instance.");
                done();
            });
    });

    it('does not receive messages after close() called', function(done) {
        TestBase.ready.then((child) => {
            TestBase.onScriptRun('childRPC.register("callme", () => window.isChild);');
            // first call OK, because procedure is registered
        }).then(() => parentRPC.invoke(TestBase.childWindow(), null, "callme", [], {'timeout': 100})
        ).then((result) => expect(result).toEqual('child')
        ).then(() => window.parentRPC.invoke(TestBase.childWindow(), null, 'close')
            // after child RPC closed, same call results in timeout
        ).then(() => parentRPC.invoke(TestBase.childWindow(), null, "callme", [], {'timeout': 100})
        ).then(
            (result) => done(new Error('Promise should not be resolved')),
            (reject) => {
                expect(reject.name).toEqual('InvocationError');
                expect(reject.procedureName).toEqual('callme');
                expect(reject.cause.name).toEqual('TimeoutError');
                expect(reject.cause.message).toEqual('Timeout after 100 ms.');
                done();
            }
        );
    });

    it('gracefully handles exceptions in remote procedure', function(done) {
        TestBase.ready.then(
            () => TestBase.onScriptRun(`childRPC.register("err", () => {
                throw new Error("err");
            });`)
        ).then(() => parentRPC.invoke(TestBase.childWindow(), null, "err")
        ).then(
            (result) => done(new Error('Promise should not be resolved')),
            (reject) => {
                expect(reject.name).toEqual('InvocationError');
                expect(reject.cause.name).toEqual('EvaluationError');
                expect(reject.cause.cause.name).toEqual('Error');
                expect(reject.cause.message).toEqual('err');
                done();
            });
    });

    it('gracefully handles rejected promise in remote procedure', function(done) {
        TestBase.ready.then(
            () => TestBase.onScriptRun(`childRPC.register("err", () => Promise.reject("rejectionReason"));`)
        ).then(() => parentRPC.invoke(TestBase.childWindow(), null, "err")
        ).then(
            (result) => done(new Error('Promise should not be resolved')),
            (reject) => {
                expect(reject.name).toEqual('InvocationError');
                expect(reject.cause).toEqual("rejectionReason");
                done();
            });
    });

    it('gracefully handles unserializable response objects', function(done) {
        TestBase.ready.then(
            () => TestBase.onScriptRun(`childRPC.register("err", () => window);`)
        ).then(() => parentRPC.invoke(TestBase.childWindow(), null, "err")
        ).then(
            (result) => done(new Error('Promise should not be resolved')),
            (reject) => {
                expect(reject.message.indexOf('could not be cloned') > -1).toBe(true);
                done();
            });
    });

    it('gracefully handles unserializable request objects', function(done) {
        TestBase.ready.then(
            () => TestBase.onScriptRun(`childRPC.register("callme", () => true);`)
        ).then(() => parentRPC.invoke(TestBase.childWindow(), null, "callme", [window])
        ).then(
            (result) => done(new Error('Promise should not be resolved')),
            (reject) => {
                expect(reject.message.indexOf('could not be cloned') > -1).toBe(true);
                done();
            });
    });

    it('gracefully handles timeouts in remote procedure', function(done) {
        TestBase.ready.then(
            () => {
                TestBase.onScriptRun(`
                    childRPC.register("err", () => {
                        return new Promise(() => true);
                    });`
                );
            }
        ).then(() => parentRPC.invoke(TestBase.childWindow(), null, "err", [], {'timeout': 100})
        ).then(
            (result) => done(new Error('Promise should not be resolved')),
            (reject) => {
                expect(reject.procedureName).toEqual("err");
                expect(reject.cause.name).toEqual('TimeoutError');
                expect(reject.cause.message).toEqual("Timeout after 100 ms.");
                done();
            });
    });

    it('can invoke function registered in the same RPC instance', function(done) {
        TestBase.ready.then(() => {
            window.parentRPC.register('finishTest', () =>  {
                done();
            });
            return TestBase.onScriptRun(`
                    childRPC.register("callme", () => window.childRPC.invoke(window.parent, null, 'finishTest'));
                    childRPC.invoke(window, null, "callme");
                `);
        });
    });
});
