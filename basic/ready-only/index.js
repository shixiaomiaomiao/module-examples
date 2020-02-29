import { counter, incCounter } from './lib.js';

// The imported value `counter` is live
console.log(counter); 
incCounter();
console.log(counter);