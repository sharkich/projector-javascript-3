`use strict`;

const inputElement = document.querySelector('.input');
const numbersElements = document.querySelectorAll('.number');

const handleNumberClick = (event) => {
    event.preventDefault();
    inputElement.value += event.target.innerHTML;
};

const startApp = () => {
    console.log('Workshop2 startApp');

    numbersElements.forEach(numberElement => numberElement.addEventListener('click', handleNumberClick))
};

document.addEventListener('DOMContentLoaded', startApp);
