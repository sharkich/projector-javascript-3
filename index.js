`use strict`;

const ballElement = document.getElementById('thimbleBall');

const getRandomIndex = () => Math.floor(Math.random() * 3);

const putBallToRandomThimble = () => {
    const index = getRandomIndex();
    ballElement.setAttribute('class', `thimbleBallPosition${index}`);
};

const showBall = () => {};

const handlePlay = () => {
    console.log('handlePlay');
    putBallToRandomThimble();
    showBall();
};
