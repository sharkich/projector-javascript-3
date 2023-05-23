console.log('start');

const buttonsElements = document.querySelectorAll('.box');

const addEventListener = (buttonElement) => {
    buttonElement.addEventListener('click', () => {
        console.log('click');
        buttonElement.innerHTML = 'X';
    });
};

buttonsElements.forEach(addEventListener);
