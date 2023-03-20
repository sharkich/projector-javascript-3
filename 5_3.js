function recursiveOddSumTo(number) {
  if (number == 1)
    return 1;
  if (number % 2 == 1)
    return (recursiveOddSumTo(number - 1) + number);
  
  return (recursiveOddSumTo(number - 1))
};
console.log(recursiveOddSumTo(1)) // 1
console.log(recursiveOddSumTo(10)) // 25


function iterativeOddSumTo(number) {
  let sum = 0; 

  for (i = 1; i <= number; i += 2) {
    sum = sum + i;
  }

  return (sum);
}

console.log(iterativeOddSumTo(1)) // 1
console.log(iterativeOddSumTo(10)) // 25