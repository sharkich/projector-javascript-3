`use strict`;

class Plant {
    constructor(color, size) {
        this.color = color;
        this.size = size;
    }

    cut() {
        console.log('Cutting successful ' + this.color);
    }
}

class Apple extends Plant {
    constructor(color, size, isInTree) {
        super(color, size);
        this.isInTree = isInTree;
    }

    fall() {
        if (this.isInTree) {
            console.log(this.color + ' Apple fell');
        } else {
            console.log(this.color + ' Apple is not in tree');
        }
    }
}

class Tomato extends Plant {
    constructor(color, size) {
        super(color, size);
    }

    jump() {
        console.log("I'm funny jumping tomato");
    }
}

const a = new Apple('green', 'small', true);
const b = new Tomato('red', 'middle', false);
const c = new Apple('red', 'large', false);

console.log(a, b, c, a === b);

b.size = 'small';

console.log(a.size, b.size, a === b, a.size === b.size);

a.fall();
a.cut();
b.cut();
