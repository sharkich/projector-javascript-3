console.log('start');

const buttonsElements = document.querySelectorAll('.box');

const PLAYERS = {
    PLAYER_1: 'X',
    PLAYER_2: 'O',
};

let isLastPlayer1 = true;
const generateButtonSymbol = () => {
    isLastPlayer1 = !isLastPlayer1;
    return isLastPlayer1 ? PLAYERS.PLAYER_2 : PLAYERS.PLAYER_1;
}

const addEventListener = (buttonElement) => {
    buttonElement.addEventListener('click', () => {
        console.log('click');
        if (buttonElement.innerHTML) {
            return;
        }
        buttonElement.innerHTML = generateButtonSymbol();
    });
};

buttonsElements.forEach(addEventListener);
