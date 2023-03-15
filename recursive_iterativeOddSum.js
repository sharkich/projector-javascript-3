// 'use strict'
// function recursiveOddSumTo(number) {
//     if (number === 1) {return number;}
//     let sum = 0;
//     let currentOddNumber = 1;
//     function recursiveSum(recLimitNumber) {
//          if (currentOddNumber < recLimitNumber) {
//             sum += currentOddNumber;
//             currentOddNumber += 2;
//             recursiveSum(recLimitNumber);
//         } else {
//             return
//         }
//     }
//     recursiveSum(number);
//     return sum;
// }

'use strict'
const recursiveOddSumTo = (number) => {
    if (number === 1) {return 1}
    if (number % 2 === 1) {
      return number + recursiveOddSumTo(number - 2);
    } else {
      return recursiveOddSumTo(number - 1);
    }
}

const iterativeOddSumTo = (number) => {
    if (number === 1) {return 1};
    let sum = 0;
    let currentOddNumber = 1;
    while(currentOddNumber <= number) {
        sum += currentOddNumber;
        currentOddNumber += 2;
    }
    return sum;
}

console.log(recursiveOddSumTo(1));
console.log(iterativeOddSumTo(1));