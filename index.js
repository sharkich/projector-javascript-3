`use strict`;

const ballElement = document.getElementById('thimbleBall');
const playButtonElement = document.getElementById('playButton');

let currentBallPosition = null;

const MIX_AMOUNT = 10;

const getRandomIndex = () => Math.floor(Math.random() * 3);

const getCup = (index) => document.getElementById(`cup${index}`);

const upThimble = () => {
    console.log('upThimble', currentBallPosition);
    getCup(currentBallPosition).classList.add('thimbleUp');
};

const downThimble = () => {
    if (currentBallPosition === null) {
        return;
    }
    console.log('downThimble', currentBallPosition);
    getCup(currentBallPosition).classList.remove('thimbleUp');
};

const putBallToRandomThimble = () => {
    downThimble();
    currentBallPosition = getRandomIndex();
    console.log('put.ball', currentBallPosition);
    ballElement.setAttribute('display', 'block');
    ballElement.setAttribute('class', `thimbleBallPosition${currentBallPosition}`);
};

const removeBall = () => {
    console.log('removeBall');
    ballElement.setAttribute('display', 'none');
};

const mixThimble = () => {
    const indexA = getRandomIndex();
    const indexB = getRandomIndex();

    if (indexA === indexB) {
        mixThimble();
        return;
    }

    if ([indexA, indexB].includes(currentBallPosition)) {
        currentBallPosition = currentBallPosition === indexA ? indexB : indexA;
        console.log('set.currentBallPosition', currentBallPosition);
    }

    console.log('mix', indexA, indexB);

    const classesA = getCup(indexA).getAttribute('class');
    const classesB = getCup(indexB).getAttribute('class');
    getCup(indexA).setAttribute('class', classesB);
    getCup(indexB).setAttribute('class', classesA);
};

const handlePlay = () => {
    console.log('handlePlay');
    playButtonElement.setAttribute('disabled', 'disabled');
    putBallToRandomThimble();
    upThimble();
    setTimeout(() => downThimble(), 500);
    setTimeout(() => {
        // removeBall();
        mixThimble();
    }, 1000);
    setTimeout(() => playButtonElement.removeAttribute('disabled'), 2000);
};
