`use strict`;

const ballElement = document.getElementById('thimbleBall');
const thimblesElements = Array.from(document.querySelectorAll('.sewingThimble'));

let currentBallPosition = null;

const getRandomIndex = () => Math.floor(Math.random() * 3);

const putBallToRandomThimble = () => {
    if (currentBallPosition !== null) {
        thimblesElements[currentBallPosition].classList.remove('thimbleUp');
    }
    currentBallPosition = getRandomIndex();
    ballElement.setAttribute('class', `thimbleBallPosition${currentBallPosition}`);
};

const showBall = () => {
    thimblesElements[currentBallPosition].classList.add('thimbleUp');
};

const handlePlay = () => {
    console.log('handlePlay');
    putBallToRandomThimble();
    showBall();
};
