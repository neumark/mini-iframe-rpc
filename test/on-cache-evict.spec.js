import MiniIframeRPC from 'mini-iframe-rpc';
import testBase from './test-base';


describe('on-cache-evict', function() {
    // iframe-on-cache-evict.html
    //
    window.isParent = "parent";

    beforeEach((done) => {
        window.parentRPC = new MiniIframeRPC({'defaultInvocationOptions': {'timeout': 0, 'retryLimit': 0}});
        testBase.defaultBeforeEach({done, parentRPC: window.parentRPC, sandbox: 'allow-scripts allow-same-origin', src: 'base/iframe-on-cache-evict.html'});
    });

    afterEach((done) => {
        testBase.defaultAfterEach({done, parentRPC: window.parentRPC});
    });

    it('cache eviction internal event callback called on eviction', function(done) {
        let evictionCount = 0;
        let onEvictCalled;
        testBase.ready.then(() => {
            onEvictCalled = new Promise((resolve, reject) => {
                window.parentRPC.register("onEvict", (id, evictedResult) => {
                    // first eviction (where evictionCount === 0) is result of appendScript
                    // we want the first eviction of a result to callme
                    if (evictionCount === 1) {
                        resolve(evictedResult);
                    }
                    evictionCount++;
                })
            });
            return testBase.onScriptRun(`
                (function() {
                    let counter=0;
                    return window.childRPC.register("callmeOnEvict", function() {
                        return counter++;
                    });
                })();
            `);
        }).then(() => {
            var results = [];
            for (let i = 0; i < 3; i++) {
                results.push(parentRPC.invoke(testBase.childWindow(), null, "callmeOnEvict", []));
            }
            Promise.all([onEvictCalled, Promise.all(results)]).then(r => {
                expect(r[0]).toEqual(0);
                expect(r[1]).toEqual([0,1,2]);
                done();
            });
        }); 
    });

});
