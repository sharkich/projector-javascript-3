'use strict';

const list = [1, 2, 3, 4, 5]

// const shuffle = (arr) => arr.sort(() => Math.round(Math.random() * 2) - 1);

function shuffle() {
    this.sort(() => Math.round(Math.random() * 2) - 1);
}

list.shuffle = shuffle;

Array.prototype.shuffle = shuffle;
