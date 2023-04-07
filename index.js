`use strict`;

const ballElement = document.getElementById('thimbleBall');
const thimblesElements = Array.from(document.querySelectorAll('.sewingThimble'));

let currentBallPosition = null;

const getRandomIndex = () => Math.floor(Math.random() * 3);

const showBall = () => {
    thimblesElements[currentBallPosition].classList.add('thimbleUp');
};

const hideBall = () => {
    if (currentBallPosition === null) {
        return;
    }
    thimblesElements[currentBallPosition].classList.remove('thimbleUp');
};

const putBallToRandomThimble = () => {
    hideBall();
    currentBallPosition = getRandomIndex();
    ballElement.setAttribute('class', `thimbleBallPosition${currentBallPosition}`);
};

const handlePlay = () => {
    console.log('handlePlay');
    putBallToRandomThimble();
    showBall();
    setTimeout(() => hideBall(), 500);
};
