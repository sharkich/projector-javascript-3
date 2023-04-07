`use strict`;

const ballElement = document.getElementById('thimbleBall');
const thimblesElements = Array.from(document.querySelectorAll('.sewingThimble'));
const playButtonElement = document.getElementById('playButton');

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

const mixThimble = () => {
    const indexA = getRandomIndex();
    const indexB = getRandomIndex();

    if (indexA === indexB) {
        mixThimble();
        return;
    }

    const classesA = thimblesElements[indexA].getAttribute('class');
    const classesB = thimblesElements[indexB].getAttribute('class');
    thimblesElements[indexA].setAttribute('class', classesB);
    thimblesElements[indexB].setAttribute('class', classesA);
};

const handlePlay = () => {
    console.log('handlePlay');
    playButtonElement.setAttribute('disabled', 'disabled');
    putBallToRandomThimble();
    showBall();
    setTimeout(() => hideBall(), 500);
    setTimeout(() => mixThimble(), 1000);
    setTimeout(() => playButtonElement.removeAttribute('disabled'), 2000);
};
