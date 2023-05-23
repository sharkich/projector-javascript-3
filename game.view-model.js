const buttonsElements = document.querySelectorAll('.box');

const PLAYERS = {
    PLAYER_1: 'X',
    PLAYER_2: 'O',
};

const gameModel = new GameModel();


const highlightWinner = (winner) =>
    winner.map((el) => {
        el.classList.add('winner');
    });

const addEventListener = (event) => {
    const {col, row} = event; // todo
    gameModel.play(col, row);
    if (gameModel.isGameFinished) {
        highlightWinner(gameModel.winner);
        setTimeout(() => {
            alert(gameModel.winner ? 'win' : 'draw');
        }, 0);
    }
};


buttonsElements.forEach(addEventListener);
