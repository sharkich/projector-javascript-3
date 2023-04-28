'use strict';

// Create a promise
// External tools
// const promise1 = fetch('https://jsonplaceholder.typicode.com/todos/1');

// Manual creation
// const task = (resolve, reject) => {
//     setTimeout(() => {
//         const n = Math.random();
//         if (n > 0.5) {
//             resolve(n);
//         } else {
//             reject(n);
//         }
//     }, 1000);
// };
// const promise2 = new Promise(task);

// Use a promise

// promise2
//     .then((data) => {
//         console.log('then1 --> ', data);
//     })
//     .catch((error) => {
//         console.log('catch1 --> ', error);
//         return Promise.reject(new Error('Error in catch1'));
//     })
//     .then(() => new Promise(task))
//     .then((data) => {
//         console.log('then2 --> ', data);
//     })
//     .catch((error) => {
//         console.log('catch2 --> ', error);
//     })
//     .finally(() => {
//         console.log('finally1');
//     });

// Promise.all

// const promise1 = new Promise(task);
// const promise2 = new Promise(task);
//
// Promise.allSettled([promise1, promise2])
//     .then((data) => {
//         console.log('then1 --> ', data);
//     })
//     .catch((error) => {
//         console.log('catch1 --> ', error);
//     });

// LED = Loading Error Data

// const promise1 = new Promise(task);
// let isLoading = true;
// promise1
//     .then(data => renderData(data))
//     .catch(error => renderError(error))
//     .finally(() => {
//         isLoading = false;
//     });

// Fetch

// fetch('https://www.anapioficeandfire.com/api/characters')
//     .then((response) => {
//         console.log('response1 -->', response);
//         if (!response.ok) {
//             return Promise.reject(response);
//         }
//         return response.json();
//     })
//     .then((data) => {
//         console.log('data --> ', data);
//         const promises = data.map(({url}) => fetch(url));
//         return Promise.all(promises);
//     })
//     .then((responses) => {
//         const promises = responses.map((response) => {
//             if (!response.ok) {
//                 return Promise.reject(response);
//             }
//             return response.json();
//         })
//         return Promise.all(promises);
//     })
//     .then(data => {
//         console.log('data2 --> ', data);
//     })
//     .catch((error) => {
//         console.error('error -->', error);
//     });

// POST

// const post = {
//     title: 'Hello world',
//     content: 'Lorem ipsum dolor sit amet',
// };
//
// fetch('http://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     body: JSON.stringify({post}),
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//     },
//     credentials: 'include',
// })
//     .then((response) => {
//         console.log('response1 -->', response);
//         if (!response.ok) {
//             return Promise.reject(response);
//         }
//         return response.json();
//     })
//     .catch((error) => {
//         console.error('error -->', error);
//     });

// AbortController

// const controller = new AbortController()
//
// fetch('https://www.anapioficeandfire.com/api/characters', {
//     signal: controller.signal
// })
//     .then((response) => {
//         console.log('response1 -->', response);
//         if (!response.ok) {
//             return Promise.reject(response);
//         }
//         return response.json();
//     });
//
// controller.abort();

// ReadableStream

// fetch('https://i.imgur.com/C5QXZ7u.mp4')
//     .then(async (response) => {
//         let received = 0;
//         const reader = response.body.getReader();
//         const contentLength = parseInt(response.headers.get('Content-Length'), 10);
//
//         while (true) {
//             const { done, value } = await reader.read();
//             if (done) {
//                 console.log('done');
//                 break;
//             }
//             received += value.length/contentLength;
//             console.log('Received: ', received);
//         }
//     });

// const post = {
//     title: 'Hello world',
//     content: 'Lorem ipsum dolor sit amet',
// }
// const json = JSON.stringify({post});
// console.log('json -->', json);//

// const json = '{"post":{"title":"Hello world","content":"Lorem ipsum dolor sit amet"}}';
// const post = JSON.parse(json);
// console.log('post -->', post);

const user =  {
    name: 'John',
};

const post = {
    title: 'Hello world',
    content: 'Lorem ipsum dolor sit amet',
    user
}
const copy = JSON.parse(JSON.stringify(post));
copy.user.name = 'Vasyl';
console.log('copy -->', post, copy);
