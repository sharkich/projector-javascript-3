import func from './index3.js';

export const func1 = () => {
    console.log('func2.1');
};

export const func2 = () => {
    func1();
    console.log('func2');
    func();
};

export const ABC = 'ABC';
