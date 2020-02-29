
const a = require('./a').a;

console.log(a);

setTimeout(() => {
    const b = require('./a').a;
    const c = require('./a').b;
    console.log(b);
    console.log(c);
});