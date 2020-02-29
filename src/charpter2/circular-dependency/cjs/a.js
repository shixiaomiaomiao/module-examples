console.log('a start');
var b = require('./b');
function foo() {
    console.log('a foo start');
    b.bar();
    console.log('a foo end');
}
exports.foo = foo;
console.log('a end');