console.log('start');

const buttonsElements = document.querySelectorAll('.box');
const [e0, e1, e2, e3, e4, e5, e6, e7, e8] = buttonsElements;
const GROUPS = [
    [e0, e1, e2],
    [e3, e4, e5],
    [e6, e7, e8],

    [e0, e3, e6],
    [e1, e4, e7],
    [e2, e5, e8],

    [e0, e4, e8],
    [e2, e4, e6],
];

const PLAYERS = {
    PLAYER_1: 'X',
    PLAYER_2: 'O',
};

let isLastPlayer1 = true;

let isGameFinished = false;

const generateButtonSymbol = () => {
    isLastPlayer1 = !isLastPlayer1;
    return isLastPlayer1 ? PLAYERS.PLAYER_2 : PLAYERS.PLAYER_1;
}

const tryFindWinner = () => GROUPS
    .find(([e1, e2, e3]) =>
        !!e1.innerText &&
        e1.innerText === e2.innerText &&
        e2.innerText === e3.innerText
    );

const highlightWinner = (winner) =>
    winner.map((el) => {
        el.classList.add('winner');
    });

const addEventListener = (buttonElement) => {
    buttonElement.addEventListener('click', () => {
        if (isGameFinished || buttonElement.innerHTML) {
            return;
        }
        buttonElement.innerHTML = generateButtonSymbol();
        const winner = tryFindWinner();
        if (winner) {
            isGameFinished = true;
            highlightWinner(winner);
            setTimeout(() => {
                alert('win');
            }, 0);
        }
    });
};

buttonsElements.forEach(addEventListener);
