console.log('index start: ', new Date().getTime());

import { a } from './a';


console.log(a);

setTimeout(() => {
    console.log('index setTimeOut: ', new Date().getTime());
    console.log(a);
}, 20);