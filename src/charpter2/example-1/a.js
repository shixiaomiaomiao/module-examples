// a.js
// export var foo = 'bar';
var foo = 'bar';
console.log('a.js start time: ', new Date().getTime());
setTimeout(() => foo = 'baz', 500);

module.exports = foo;
console.log('a.js end time: ', new Date().getTime());