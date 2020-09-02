'use strict';

// console.log(1);

// setTimeout(() => {
//     console.log('timeout');
// }, 4000);

// setTimeout(() => {
//     console.log('timeout_4000');
// }, 4000);

// console.log(2);

// let k = 0;

// function count() {
//     for (let i = 0; i < 1e9; i++) {
//         k++;
//     }
//     alert('done');
// }

// count();

setTimeout(() => {
    console.log(1);
}, 0); // операция все равно выполнится позже, потому что JS подставляет на место нуля 4 
// (а также setTimeout всегда сначала попадает в Web Apis, потому уже в callback queue)

console.log(2);