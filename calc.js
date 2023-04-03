`use strict`;

const OPERATIONS = ['*', '/', '+', '-'];

const doOperation = (number1, number2, operator) => {
    if (operator === '*') {
        return number1 * number2;
    } else if (operator === '/') {
        return number1 / number2;
    } else if (operator === '+') {
        return number1 + number2;
    } else if (operator === '-') {
        return number1 - number2;
    }
    throw new Error('Unknown operator: ' + operator);
};

export const doCalculation = (input) => {
    const numbers = input
        .split(/\+|\-|\*|\//g)
        .map(Number);
    console.log(numbers);

    const operators = input
        .replace(/[0-9]|\./g, '')
        .split('');
    console.log(operators);

    OPERATIONS.forEach((operator) => {
        let index = operators.indexOf(operator);
        while (index !== -1) {
            numbers
                .splice(
                    index,
                    2,
                    doOperation(numbers[index], numbers[index + 1], operator)
                );
            operators.splice(index, 1);
            index = operators.indexOf(operator);
        }
    });

    return numbers[0];
};
