console.log('b start');
var a = require('./a'); // (i)
function bar() {
    console.log('b bar start');
    if (Math.random()) {
        //a.foo(); // (ii)
    }
    console.log('b bar end');
}
exports.bar = bar;
console.log('b end');