const a = require('./a').a;
console.log(a);

setTimeout(() => {
    const a = require('./a').a;
    console.log(a);
});