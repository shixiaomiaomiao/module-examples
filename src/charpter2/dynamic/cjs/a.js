var a = 1;
var b;
setTimeout(() => {
    a = 2;
    b = 3;
}, 2)

module.exports.a = a;

module.exports.b = b;