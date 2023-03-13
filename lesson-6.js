/* const userName = '123';

function sayHello(
  // arguments
  name = 'noname',
  age = 16
) {
  // body
  const localUserName = '777';
  if (age < 16) {
    return `Hi, ${name}!`
  }

  if (age < 35) {
    return `Hello, ${name}!`;
  }

  return `Good day, ${name}`;
}

const a = sayHello('Alex', 45);

console.log(a); */


/* console.log(sum1(1, 2));

function sum1 (a, b) {
  return a + b;
}

const sum2 = function (a, b) {
  return a + b;
};

// Default

const sum3 = (a, b) => {
  const c = a * 2;
  return a + b + c;
};

const sum31 = (a, b) => a + b; */



/* const age = 356;

console.log(sum1(10, 20));

if (age < 20) {
  function sum1 (a, b) {
    return (a + b) / 2;
  }
} else {
  function sum1 (a, b) {
    return (a + b) * 2;
  }
}

console.log(sum1(10, 20)); */

/* const abc = () => console.log('123');
abc();

(() => {
  console.log('abc');
})(); */

/* (function(name) {
  console.log(name)
})('Alex'); */

/* const f1 = () => console.log(1);
const f2 = async () => await console.log(1);

(async () => {
  // todo
})(); */


/* (() => {
  // func1
})();

(() => {
  // func2
})(); */

/* const age = 16;
const sum = age > 20 ?
  (a, b) => a + b :
  (a, b) => a - b;
console.log(sum(1, 2)); */




// 1 O(n)
/* const calculateSum1 = (n) => {
  let sum = 0;
  for(let i = 1; i<=n; i++) {
    sum+=i;
  }
  return sum;
};

// 2
const calculateSum2 = (n) =>
  new Array(n)
    .fill(null)
    .map((_, index) => index + 1)
    .reduce((a, b) => a + b);

// 3
const calculateSum3 = (n) => {
  if (n === 1) {
    return 1;
  }
  return n + calculateSum3(n - 1);
};

console.log(calculateSum3(12000)); */



const resultsArray = [1, 2, [3, [4]]];

console.log(
    resultsArray
        .toString()
        .split(',')
        .reduce((product,number) => product * number, 1)
);




















