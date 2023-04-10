`use strict`;

class Plant {
    constructor(color, size) {
        this.color = color;
        this.size = size;
    }

    cut() {
        console.log('Cutting successful ' + this.color);
    }

    setSize(size) {
        if (['small', 'middle', 'large'].includes(size)) {
            this.size = size;
        } else {
            throw new Error('Wrong size');
        }
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

const size = document.getElementById('size') ?? 'small';

b.setSize(size);

console.log(a.size, b.size, a === b, a.size === b.size);

a.fall();
a.cut();
b.cut();

console.log('2' + '2');

const margeHeight = (obj, height) => {
    obj.height = height;
    return obj;
};

const aa = margeHeight(a, 10);
const bb = margeHeight(b, 20);

console.log(aa, bb);
