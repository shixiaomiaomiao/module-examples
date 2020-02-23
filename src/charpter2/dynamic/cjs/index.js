
const a = require('./a').a;

console.log(a);

setTimeout(() => {
    const b = require('./a').a;
    console.log(b);
});