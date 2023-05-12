`use strict`;

// const createIterator = (_collection => {
//     let index = 0;
//     return {
//         next: () => {
//             const value = _collection[index];
//             index++;
//             return {
//                 value,
//                 done: index > _collection.length
//             };
//         }
//     };
// });
//
// const collection = ['a', 'b', 'c', 'd'];
//
// const iterator = createIterator(collection);

// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

// for (let val of collection) {
//     console.log(val);
// }
//
// console.log(collection);
// console.log('123');

// iterator for Object

const user = {
    name: 'Vasia',
    age: 42,
    roles: ['admin', 'user'],
    isAdmin: true
};

// user[Symbol.iterator] = function() {
//     const properties = Object.keys(this);
//     let index = 0;
//     return {
//         next: () => {
//             if (index > properties.length - 1) {
//                 return {done: true, value: undefined};
//             }
//             const key = properties[index];
//             const result = {
//                 done: false,
//                 value: this[key]
//             };
//             index++;
//             return result;
//         }
//     };
// }
//
// console.log(user);
//
// for (let val of user) {
//     console.log(val);
// }

// const arr1 = ['a', 'b', 'c']
// const [a, b] = user;
// console.log(a, b);


// const range = {
//     from: 10,
//     to: 15
// };
//
// range[Symbol.iterator] = function createRangeIterator() {
//     let value = this.from;
//     return {
//         next: () => {
//             return value <= this.to ?
//                 {value: value++, done: false} :
//                 {done: true};
//         }
//     };
// };


// const iterator = createRangeIterator(range);

// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

// for (let val of range) {
//     console.log(val);
// }

// const arr1 = ['a', 'b', 'c']
// const [a, b] = user;
// console.log(a, b);

// const arr2 = [1, 2, 3, 4, 5];
// const iterator = arr2[Symbol.iterator]();
//
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

// console.log([...'Abalagamaga']);

// function* sayName() {
//     yield 'Olia';
//     yield 'Sashs';
//     yield 'Kolia';
//     yield 'Nina';
//     return 'Vasia';
// }
//
// const names = sayName();

// console.log(names.next());
// console.log(names.next());
// console.log(names.next());
// console.log(names.next());
// console.log(names.next());
// console.log(names.next());

// for (let name of names) {
//     console.log(name);
// }

function* gerateId(initValue, maxValue = 125) {
    let id = initValue;
    while (true) {
        if (id > maxValue) {
            return id;
        }
        yield id++;
    }
};

const ids = gerateId(123);

// console.log(ids.next());
// console.log(ids.next());
// console.log(ids.next());
// console.log(ids.next());
// console.log(ids.next());
// console.log(ids.next());
// console.log(ids.next());

for (let id of ids) {
    console.log(id);
}
