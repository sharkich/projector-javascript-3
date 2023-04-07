`use strict`;

const ballElement = document.getElementById('thimbleBall');
const playButtonElement = document.getElementById('playButton');

let currentBallPosition = null;

const MIX_AMOUNT = 10;

const getRandomIndex = () => Math.floor(Math.random() * 3);

const getCup = (index) => document.getElementById(`cup${index}`);

const upThimble = (index) => {
    console.log('upThimble', currentBallPosition);
    getCup(index === undefined ? currentBallPosition : index).classList.add('thimbleUp');
};

const downThimble = () => {
    if (currentBallPosition === null) {
        return;
    }
    console.log('downThimble', currentBallPosition);
    getCup(currentBallPosition).classList.remove('thimbleUp');
};

const putBall = (index) => {
    downThimble();
    currentBallPosition = index === undefined ? getRandomIndex() : index
    console.log('put.ball', currentBallPosition);
    ballElement.setAttribute('display', 'block');
    ballElement.setAttribute('class', `thimbleBallPosition${currentBallPosition}`);
};

const removeBall = () => {
    console.log('removeBall');
    ballElement.style.display = 'none';
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

const reset = () => {
    getCup(0).setAttribute('class', 'sewingThimble thimble0');
    getCup(1).setAttribute('class', 'sewingThimble thimble1');
    getCup(2).setAttribute('class', 'sewingThimble thimble2');
};

const handlePlay = () => {
    console.log('handlePlay');
    reset();
    playButtonElement.setAttribute('disabled', 'disabled');
    putBall();
    upThimble();
    setTimeout(() => {
        downThimble()
    }, 500);
    setTimeout(() => {
        let mixAmount = 0;
        removeBall();
        const mixId = setInterval(() => {
            mixThimble();
            mixAmount++;
            if (mixAmount === MIX_AMOUNT) {
                clearInterval(mixId);
                putBall(currentBallPosition);
                setTimeout(() => ballElement.style.display = 'block', 500);
            }
        }, 500);
    }, 1000);
    setTimeout(() => playButtonElement.removeAttribute('disabled'), 2000);
};
