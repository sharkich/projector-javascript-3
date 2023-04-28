'use strict';

// Create a promise
// External tools
const promise1 = fetch('https://jsonplaceholder.typicode.com/todos/1');

// Manual creation
const task = (resolve, reject) => {
    setTimeout(() => {
        const n = Math.random();
        if (n > 0.5) {
            resolve(n);
        } else {
            reject(n);
        }
    }, 1000);
};
const promise2 = new Promise(task);

// Use a promise

promise2
    .then((data) => {
        console.log('then1 --> ', data);
    })
    .catch((error) => {
        console.log('catch1 --> ', error);
        return Promise.reject(new Error('Error in catch1'));
    })
    .then(() => new Promise(task))
    .then((data) => {
        console.log('then2 --> ', data);
    })
    .catch((error) => {
        console.log('catch2 --> ', error);
    })
    .finally(() => {
        console.log('finally1');
    });
