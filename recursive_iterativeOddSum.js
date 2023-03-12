'use strict'
function recursiveOddSumTo(number) {
    let sum = 1;
    let currentOddNumber = 1;
    let limitNumber = number;
    number % 2 === 0 ? limitNumber -= 1 : limitNumber -= 2;  
    function recursiveSum(recLimitNumber) {
        if (currentOddNumber < limitNumber) {
            currentOddNumber += 2;
            sum += currentOddNumber;
            recursiveSum(recLimitNumber);
        } else {
            return
        }
    }
    recursiveSum(limitNumber);
    return sum;
}


function iterativeOddSumTo(number) {
    let sum = 1;
    let currentOddNumber = 1;
    let limitNumber = number;
    number % 2 === 0 ? limitNumber -= 1 : limitNumber -= 2;
    while(currentOddNumber < limitNumber) {
        currentOddNumber += 2;
        sum += currentOddNumber;
    }
    return sum;
}