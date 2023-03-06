// const emptyList = [];
// console.log(!!emptyList);

// const list = ['red', 1234, true, [1, 2, 3]];
// console.log(list);

// const daysNumber = 5;
// const daysList = new Array(daysNumber);
// console.log(daysList);

// console.log(Array.isArray(123));

// const users = ['Ivan', 'Petro', 'Oleg', 'Inna', 'Sasha'];
// console.log(users.at(-2));

// const users = ['Ivan', 'Petro', 'Oleg', 'Inna', 'Sasha'];
// users[1] = 'Dasha';
// console.log(users);

// const users = ['Ivan', 'Petro', 'Oleg', 'Inna', 'Sasha'];
// delete users[1];
// console.log(users);

// const users = ['Ivan', 'Petro', 'Oleg', 'Inna', 'Sasha'];
// users.push('Alex');
// console.log(users);

// const users = ['Ivan', 'Petro', 'Oleg', 'Inna', 'Sasha'];
// users.unshift('Alex');
// console.log(users);

// iteration

// const users = ['Ivan', 'Petro', 'Oleg', 'Inna', 'Sasha'];
// for (let i = 0; i < users.length; i++) {
//     console.log(users[i]);
// }

// for (const user of users) {
//     console.log(user);
// }

// ~~~~~~~ functions

// 1
// function sum(a, b) {
//     return a + b;
// }

// 2
// const sum = function(a, b) {
//     return a + b;
// };

// 3
// const sum = (a, b) => {
//     return a + b;
// };

// 4
// const sum = (a, b) => a + b;

// const ab = sum(1, 2);
// console.log(ab);

// 5
// const mul2 = a => a * a;
// console.log(mul2(2))


// const users = ['Ivan', 'Petro', 'Oleg', 'Inna', 'Sasha'];
// users.forEach((element, index) => console.log(index, element));

// delete
// const users = ['Ivan', 'Petro', 'Oleg', 'Inna', 'Sasha'];
// const deletedUsers = users.splice(1, 2);
// console.log('users->', users);
// console.log('deletedUsers->', deletedUsers);

// const users = ['Ivan', 'Petro', 'Oleg', 'Inna', 'Sasha'];
// users.splice(1, 2, 'Anna', 'Ira', 'Olena');
// console.log('users->', users);

// copy

// const users = ['Ivan', 'Petro', 'Oleg', 'Inna', 'Sasha'];
// const newUsers = users.slice(1, 3);
// console.log('users->', users);
// console.log('newUsers->', newUsers);


// 1
// const users = ['Ivan', 'Petro', 'Oleg', 'Inna', 'Sasha'];
// const copyUsers = users.slice();
// copyUsers[1] = 'Anna';
// console.log('users->', users);
// console.log('newUsers->', copyUsers);

// 2
// const users = ['Ivan', 'Petro', 'Oleg', 'Inna', 'Sasha'];
// const copyUsers = [...users];
// copyUsers[1] = 'Anna';
// console.log('users->', users);
// console.log('newUsers->', copyUsers);

// concatenated
// const users1 = ['Ivan', 'Petro'];
// const users3 = users1.concat(['Oleg', 'Inna', 'Sasha'], 'Anna');
// console.log('users3->', users3);

// const users1 = ['Ivan', 'Petro'];
// const users2 = ['Oleg', 'Inna', 'Sasha'];
// const users3 = [...users1, 'Inna',  ...users2];
// console.log('users3->', users3);

// map
// const users = ['Ivan', 'Petro', 'Oleg', 'Inna', 'Sasha'];
// for (let i = 0; i < users.length; i++) {
//     users[i] = users[i].toUpperCase();
// }
// console.log('users->', users);

// const users = ['Ivan', 'Petro', 'Oleg', 'Inna', 'Sasha'];
// for (let user of users) {
//     user = user.toUpperCase();
// }
// console.log('users->', users); // NOT WORKING

// const users = ['Ivan', 'Petro', 'Oleg', 'Inna', 'Sasha'];
// const newUsers = users.map((element, index, arr) => element.toUpperCase());
// console.log('newUsers->', newUsers);

// sort
// const SWAP = 1;
// const SKIP = -1;
// const EQUAL = 0;
// const users = [4, 10, 12, -5, 8];
// users.sort((a, b) => {
//     if (a > b) {
//         return SWAP;
//     }
//     if (a < b) {
//         return SKIP;
//     }
//     return EQUAL;
// });
// users.sort((a, b) => a - b);
// console.log('users->', users);

// revers
// const users = ['Ivan', 'Petro', 'Oleg', 'Inna', 'Sasha'];
// users.reverse();
// console.log('users->', users);

// strings <> arrays
// const users = ['Ivan', 'Petro', 'Oleg', 'Inna', 'Sasha'];
// console.log(users.join(' '));

// const users = 'Ivan Petro Oleg Inna Sasha';
// console.log(users.split(''));

// find
// const users = ['Ivan', 'Petro', 'Oleg', 'Inna', 'Sasha', 'Ivan'];
// console.log(users.includes('Ivan'));
// console.log(users.indexOf('Ivan'));
// console.log(users.lastIndexOf('Ivan'));

// const users = ['Anna', 'Petro', 'Oleg', 'Inna', 'Sasha', 'Alex'];
// const isEndedByN = userName => userName[0] === 'A';
// console.log(users.find(isEndedByN));
// console.log(users.filter(isEndedByN));

// flat
// const matrix = [
//     [1, 2, 3],
//     [9, 8, [3, [8, 5, 3], 8],
//     [6, 5, 7]
// ];
// console.log(matrix.flat(Infinity));

// every, some
// const users = ['Anna', 'Petro', 'Oleg', 'Inna', 'Sasha', '', 'Alex'];
// const isEndedByN = userName => userName.length > 1;
// console.log(users.some(isEndedByN));
// console.log(users.every(isEndedByN));

// reduce
// const numbers = [5, 3, 7, 10, 20];
// const sum = numbers.reduce((accum, element) => {
//     console.log('element', element);
//     console.log('accum', accum);
//     return element + accum;
// }, 0);
// console.log('~~~~~~~~~ sum ->', sum);

// const numbers = [5, 3, -5, 7, 0, 10, -2, 20];
// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] < 0) {
//         continue;
//     }
//     sum = sum + numbers[i] ** 2;
// }
// console.log('sum ->', sum );

// const numbers = [5, 3, -5, 7, 0, 10, -2, 20];
// const sum = numbers.reduce((accum, element) => {
//     if (element <= 0) {
//         return accum;
//     }
//     return element ** 2 + accum;
// }, 0);
// console.log('sum ->', sum );

const numbers = [5, 3, -5, 7, 0, 10, -2, 20];
const sum = numbers
    .filter(element => element > 0)
    .map(element => element ** 2)
    .reduce((accum, element) => element + accum, 0);
console.log('sum ->', sum );
