`use strict`;

import { doCalculation } from "./calc.js";

const inputElement = document.querySelector('.input');
const numbersElements = document.querySelectorAll('.number');
const operatorsElements = document.querySelectorAll('.operator');
const clearElement = document.querySelector('.clear');
const resultElement = document.querySelector('.result');

const handleNumberClick = (event) => {
    inputElement.value += event.target.innerHTML;
};

const handleClearClick = () => {
    inputElement.value = '';
};

const handleOperatorClick = (event) => {
    if (inputElement.value === '') {
        return;
    }
    const NUMBERS_SYMBOLS = '01234567890.';
    const lastIndex = inputElement.value.length - 1;
    const lastChar = inputElement.value[lastIndex];
    if (!NUMBERS_SYMBOLS.includes(lastChar)) {
        inputElement.value = inputElement.value.slice(0, lastIndex);
    }
    inputElement.value += event.target.innerHTML;
};

const handleResultClick = () => {
    // the main logic
    const prepearedString = inputElement.value
        .replace(/÷/g, '/')
        .replace(/×/g, '*');
    inputElement.value = doCalculation(prepearedString);
};

const startApp = () => {
    console.log('Workshop2 startApp');

    numbersElements.forEach(numberElement => numberElement.addEventListener('click', handleNumberClick));
    clearElement.addEventListener('click', handleClearClick);
    operatorsElements.forEach(operatorElement => operatorElement.addEventListener('click', handleOperatorClick));
    resultElement.addEventListener('click', handleResultClick);
};

document.addEventListener('DOMContentLoaded', startApp);
