'use strict'
const recursiveOddSumTo = (number) => {
  if (number) {
    if (number === 1) {
      return 1;
    }
    if (number % 2 === 1) {
      return number + recursiveOddSumTo(number - 2);
    } 
    return recursiveOddSumTo(number - 1);
  }
  return 0;
}

const iterativeOddSumTo = (number) => {
    let sum = 0;
    for(let currNum = 1; currNum <= number; currNum += 2) {
      sum += currNum;
    }
    return sum;
}