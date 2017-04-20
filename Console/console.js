const count = 5;
console.log('count: %d', count); // count: 5
console.log('hello', 'world'); // hello world


const code = 5;
console.error('error #%d', code); // error #5


console.time('for loop');
let total;
for(let i = 0; i < 100; i++) {
  total += i;
}
console.timeEnd('for loop'); // for loop: 0.103ms


let obj = {
  a: {
    b: {
      c: {
        d: 1
      }
    }
  }
};
console.dir(obj, {showHidden: true, colors: true, depth: null}); // { a: { b: { c: { d: 1 } } } }


console.trace('hello sam');
// Trace: hello sam
//     at repl:1:9
//     at realRunInThisContextScript (vm.js:22:35)
//     at sigintHandlersWrap (vm.js:98:12)
//     at ContextifyScript.Script.runInThisContext (vm.js:24:12)
//     at REPLServer.defaultEval (repl.js:346:29)
//     at bound (domain.js:280:14)
//     at REPLServer.runBound [as eval] (domain.js:293:12)
//     at REPLServer.onLine (repl.js:544:10)
//     at emitOne (events.js:101:20)
//     at REPLServer.emit (events.js:188:7)


console.assert(false, 'Wrong %s', 'message'); // AssertionError: Wrong message
