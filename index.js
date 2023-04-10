`use strict`;

class GreenApple {
    constructor(size, isInTree) {
        this.size = size;
        this.isInTree = isInTree;
    }

    fall() {
        if (this.isInTree) {
            console.log('Apple fell');
        } else {
            console.log('Apple is not in tree');
        }
    }
}

const a = new GreenApple('small', true);
const b = new GreenApple('middle', false);
const c = new GreenApple('large', false);

console.log(a, b, c, a === b);

b.size = 'small';

console.log(a.size, b.size, a === b, a.size === b.size);

a.fall();
b.fall();
