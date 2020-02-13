import {foo} from './a.js';
console.log(foo);
setTimeout(() => console.log(foo), 500);