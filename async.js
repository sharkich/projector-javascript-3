'use strict';

// setTimeout(function greet(){
//     console.log(10)
// }, 10);
//
// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);


// Stack

// function f1() {
//     console.log('f1.start');
//     function f2() {
//         console.log('f2.start');
//         function f3() {
//             console.log('f3.start');
//             console.log('x');
//             console.log('f3.end');
//         }
//         f3();
//         console.log('f2.end');
//     }
//     f2();
//     console.log('f1.end');
// }
//
// f1();

// Stack = FILO
// Queue = FIFO

// Loop

// function main() {
//     setTimeout(function greet() {
//         console.log('Hello!');
//     }, 2000);
//     console.log('Bye!');
// }
//
// main();
// // Stack
//     // main
// // WebApi
//     // greet
// // Queue
//     // greet

// doAction((result) => {
//     doAction((result2) => {
//         doAction((resullt3)=> {
//
//         });
//     });
// });


// setTimeout(() => {
//   setTimeout(() => {
//     setTimeout(() => {
//       setTimeout(() => {
//         console.log('Hello!')
//       }, 5000)
//     }, 5000)
//   }, 5000)
// }, 5000)

// function request(url, onSuccess) {
//   /*...*/
// }
//
// request('/api/users/1', function (user) {
//   request(`/api/photos/${user.id}/`, function (photo) {
//     request(`/api/crop/${photo.id}/`, function (response) {
//       console.log(response)
//     })
//   })
// })



const response = await fetch('https://google.com/api/users', {
    method: 'POST',
    body: JSON.stringify({name: 'John'}),
});
