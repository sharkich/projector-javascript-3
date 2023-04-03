`use strict`;

const inputElement = document.querySelector('.input');
const numbersElements = document.querySelectorAll('.number');
const clearElement = document.querySelector('.clear');

const handleNumberClick = (event) => {
    inputElement.value += event.target.innerHTML;
};

const handleClearClick = () => {
    inputElement.value = '';
};

const startApp = () => {
    console.log('Workshop2 startApp');

    numbersElements.forEach(numberElement => numberElement.addEventListener('click', handleNumberClick));
    clearElement.addEventListener('click', handleClearClick);
};

document.addEventListener('DOMContentLoaded', startApp);
