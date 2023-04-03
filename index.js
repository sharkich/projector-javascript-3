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
