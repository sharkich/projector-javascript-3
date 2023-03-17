'use strict';

// function bcd() {
//     function abc(a1, a2, ...rest) {
//         console.log(arguments);
//     }
//     abc();
// }
//
// bcd(1, 2, 3, 55);


// function sum(v1, v2, v3) {
//     return v1+v2+v3;
// }
//
// const values = [1, 2, 3];
//
// console.log(sum(...values));


// function sum(v1, v2, v3) {
//     return v1+v2+v3;
// }
// const values1 = [1, 2, 3];
// const values2 = [-1, 22, 0];
// const allValues = [...values1, ...values2];
// console.log(Math.max(...allValues));

// closure

// let price1 = 1;
//
// function simpleSum(a, b) {
//     let innerPrice = 2;
//     return a + b + innerPrice;
// }
//
// price1 = 3;
// let innerPrice = 20;
// console.log(simpleSum(price1, innerPrice));

// function makeWorker() {
//     let name = "Петро";
//     return function() {
//         const name = "Алекс";
//         console.log(name);
//     };
// }
// let name = "Іван";
// // create a function
// let work = makeWorker();
// // call it
// work();


// function makeCounter() {
//     let count = 0;
//
//     return function () {
//         return ++count;
//     };
// }
//
// const counter = makeCounter();
//
// console.log(counter()); // 1
// console.log(counter()); // 2
// console.log(counter()); // 3
//
// const counter2 = makeCounter();
//
// console.log(counter2()); // 1
// console.log(counter2()); // 2
// console.log(counter2()); // 3

// let count = 0;
// const showCount = () => {
//     console.log(count);
// }
// count = 1;
// showCount();

// IIFE
// (function (){
//     let count = 0;
//     const showCount = () => {
//         console.log(count);
//     }
//     count = 1;
//     showCount();
// })();

// globalThis.count = 0;
// globalThis.count++;
// globalThis.count++;
//
// console.log(globalThis.count);


// const showCount = (a1, a2, a3, ...rest) => {
//     console.log('123');
// }
// showCount();
// showCount(1, 2);
// showCount(1, 2, 3);
// showCount(1, 2, 34, 5);
// console.log(showCount.name);
// console.log(showCount.length);


// let count = 0;
// const showCount = () => {
//     console.log(count);
//     showCount.externalCount = 100;
// }
// showCount.externalCount = 123;
// showCount.externalCount++;
// count = 1;
// // console.log(typeof showCount);
// showCount();
// console.log(showCount.externalCount);



// var a1 = 1;
// let a2 = 1;
// const a3 = 1;
// a4 = 1;
//
// console.log(a4);


// function sum(a1, a2) {
//     if (typeof a1 !== 'number') {
//         console.log(a1);
//         if (typeof a2 === 'number') {
//             return a1 + a2;
//         }
//     }
//     return a1 + a2;
// }

function sum(list) {
    if (list.length > 5) {
        throw new Error('Too many arguments');
    }
    list.sort();
}

sum(123);
