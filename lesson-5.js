const key = 'hello world';
const alex = 'Alex';

const person = {
    "name": 'Artem',
    age: 38,
    isAdmin: true,
    roles: ['admin', 'user'],
    body: {
        height: 191,
        weight: 76,
        head: {
            eyes: 2
        }
    },
    hello: () => console.log('Hello'),
    'hello world &^%!@&^%#@!&^%': 'world',
    key: 'i`m key',
    [key]: undefined,
    alex
};

/* person.hello(); */

/* const height1 = person.body.height ? person.body.heigh :  'default'; */
/* const height2 = person.body.height ?? 'default'; */

/* console.log(person[key]); */

/* person.name = 'Oleg'; */
/* console.log(person.name); */

/* person.name = null;
delete person.name;
console.log(person); */

/* person.wife = 'Zina';
console.log(person); */

/* if ('wife' in person) {
  delete person.wife;;
} else {
  person.wife = 'Zina';
}
console.log(person); */

/* for (let k in person) {
  console.log(k);
  console.log(person[k]);
} */

/* const height = person.Body?.height; // ok
delete person.Body?.height; // ok
person.Body?.height = {}; // error
*/

/* console.log(Object.keys(person)); */
/* console.log(Object.values(person)); */

/* Object.keys(person)
  .sort()
  .filter(k => k[0] === 'h')
  .forEach(k => console.log(k)); */

/* const hello = Object.keys(person)
  .filter(k => k[0] === 'h')
  .reduce((acc, k) => ({ ...acc, [k]: person[k] }), {});
console.log(hello); */

/* const newObj = Object.entries(person)
  .map(([key, value]) => ([key.toUpperCase(), value]));
console.log(Object.fromEntries(newObj)) */;

// Destructurisation

/* const arr1 = [1, 2, 3]; */
/* const a = arr1[0];
const b = arr1[1];
const c = arr1[2]; */
/* const [a, b, c, d, e] = arr1;
console.log(a, b, c, d, e); */

/* const abc = {a: 1, b: 2, c: 3};
const {a} = abc;
console.log(a); */

/* const abc = {a: 1, b: 2, c: 3};
const qwerty = abc;
qwerty.q = 10;
abc.q = 12;
console.log(qwerty.q); */

/* const a = {};
a[42] = 123;
a['42'] = 321;
console.log(a); */

/* const abc = {a: 1, b: 2, c: 3, de: { d: 4, e: 5 }};
const qwerty = { ...abc };
abc.de.d = 123;
console.log(qwerty.de); */

/* const abc = {a: 1, b: 2, c: 3, de: { d: 4, e: 5 }};
const cba = Object.assign({}, abc, { qwe: 'qwe' });
console.log(cba); */

/* const abc = {a: 1, b: 2, c: 3, de: { d: 4, e: 5 }};
const cba = JSON.parse(JSON.stringify(person));
abc.de.d = 123;
console.log(cba); */

/* const a = null;
console.log(typeof a);
if (
  typeof a === 'object' &&
  !Array.isArray(a) &&
  a !== null
) {
  console.log('Object!');
} */

/* const a = Object({ a: 1 });
console.log(a); */

/* const a = { a: 1 };
Object.freeze(a);
a.a = 2;
console.log(a); */

// Part 1
/* const s = Symbol('sym');
const a = { x: 1, [s]: 'sym' }; */

// Part 2
/* const s2 = Symbol('sym');
console.log(a.s); */
/* const [own] = Object.getOwnPropertySymbols(a);
console.log(a[own]); */

// Date
/* const d1 = new Date('26 sep 1984 16:43'); */
/* const d1 = Date(); */
/* const d1 = Date.now(); */
/* const d1 = new Date(1999, 11, 11, 23, 59); */
/* const d1 = new Date('26 sep 1984 16:43');
d1.setDate(13);
console.log(d1.toString()); */

/* const d1 = performance.now();
new Array(100000).fill(null).map((_, i) => i ** 2);
const d2 = performance.now();
console.log(d2-d1); */


const d1 = Date.parse('1999-12-12');
console.log(d1)
