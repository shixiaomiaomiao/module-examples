
console.log('a start: ', new Date().getTime());
setTimeout(() => {
    console.log('setTimeout: ', new Date().getTime());
    a = 2;
}, 100)

export var a = 1;