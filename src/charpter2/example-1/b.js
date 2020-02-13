// import {foo} from './a.js';
const foo = require('./a');
console.log('b.js start time: ', new Date().getTime());
console.log(foo);
setTimeout(() => console.log(foo), 500);
console.log('a.js end time: ', new Date().getTime());