`use strict`;

// Set

// const set1 = new Set();
//
// set1.add('red');
// set1.add('blue');
// set1.add('green');
// set1.add('red');
//
// console.log('set ->', set1);

// console.log('set ->', set1.has('blue'));
// console.log('set ->', set1.has('red'));
//
// set1.delete('red');
//
// console.log('set ->', set1);
// console.log('set ->', set1.has('red'));
//
// set1.clear();
//
// console.log('set ->', set1);
// console.log('set ->', set1.has('red'));


// const set2 = new Set([1, 2, 3, 4, 1, 4, 5, 7, 42, 'olol']);
// console.log('set ->', set2);

// set2.forEach((e) => console.log(e));

// const set3 = new Set();
// set3.add(42);
// set3.add(456);
// set3.add(12);
// set3.add(7);
// set3.add(100);

// const [a, b, c, d] = set3;
// console.log(a, b, c, d);

// for (const a of set3) {
//     console.log(a);
// }

// const user1 = {login: 'mail@gmail.com'};
// const user2 = {login: 'mail@gmail.com'};
//
// const set4 = new Set();
// set4.add(user1);
// set4.add(user2);
// set4.add({login: 'mail@gmail.com'});
//
// console.log('set ->', set4);

// Map

const user1 = {login: 'mail1@gmail.com'};
const user2 = {login: 'mail2@gmail.com'};

// const autorized = {
//     [user1]: true,
//     [user2]: true,
// };

// const autorized = new Map();
// autorized.set(user1, true);
// autorized.set(user2, true);
// console.log(autorized);
//
// console.log('has ->', autorized.has(user1));
// console.log('value ->', autorized.get(user1));
// console.log('size ->', autorized.size);


// const map1 = new Map([
//     ['key', 'value'],
//     [user1, true],
//     [[1, 2, 3], '123'],
//     [user1, 123222],
// ]);
// console.log(map1);
//
// map1.forEach((value, key) => {
//     console.log('key ->', key, 'value ->', value);
// });

// for (const [key, value] of map1) {
//     console.log(key, value);
// }

// map1.set(user1, false);
// map1.set({login: 'mail1@gmail.com'}, 333);
// map1.set(user2, 222);
//
// console.log(map1);

// Weak

// const users = new WeakMap();
//
// function getUser() {
//     const user1 = {email: 'gmail'};
//     users.set(user1, 'Hello');
//     console.log('user1 ->', user1);
//     const asd = [user1];
// }
//
// getUser();
//
// const users = {
//     user1
// }
//
// setTimeout(() => {
//     console.log(users);
// }, 10);

// Destruction

// const numbers = [42, 456, 123, 7, 55];
// // const a = numbers[0];
// // const b = numbers[1];
// // const c = numbers[2];
// const [a, b, ...c] = numbers;
// console.log(a, b, c);


// const numbers = [42, 456];
// const [a, b, c = 123] = numbers;
// console.log(a, b, c);

// Swap

// let a = 123;
// let b = 321;
// [a, b] = [b, a];
//
// console.log('a ->', a, 'b ->', b);

// const a = [1, 2, 3, 4];
// const b = [10, 20, 30];
// // const c = a.concat(b);
// const c = [0, ...a, 777, ...b, 999];
// console.log('c ->', c);

// const userVasia = {
//     name: 'Vasia',
//     age: 42,
//     address: {
//         leve1: {
//             level2: {
//                 value: 123,
//                 value2: 321,
//             }
//         }
//     }
// };
//
// const value = 213;
// const {value: newValue, value2, value3 = '777'} = userVasia.address.leve1.level2;
// console.log('name', newValue, value2, value3);

// const roleAdmin = {
//     role: 'admin',
//     isAdmin: true
// };
//
// const roleUser = {
//     role: 'user',
//     isAdmin: false
// };
//
//
// const userVasia = {
//     name: 'Vasia',
//     age: 42,
// };
//
// function addAdminRole(user) {
//     return {
//         ...user,
//         ...roleAdmin
//     };
// }
//
// const adminVasia = addAdminRole(userVasia);
// console.log(userVasia, adminVasia);

function Label({label}) {
    return `Label: ${label}`
}

function Button({color, ...props}) {
    return `Button: ${color}, ${Label(props)}`
}

const button = Button({
    color: 'red',
    label: 'Hello'
});

console.log(button);
