
// const numberOfUsers = 2;

// let message = '';

// if (numberOfUsers === 0) {
//     message = 'No users';
// } else if (numberOfUsers === 1) {
//     message = 'Hello user';
// } else {
//     message = 'Hello users';
// }

// const messageForDefinedUsers = numberOfUsers === 1 ?
//         'Hello user' :
//         'Hello users';

// const message = numberOfUsers === 0 ?
//     'No users' :
//     messageForDefinedUsers;

// console.log(message);

// const color = 'red';

// switch(color) {
//     case 'red':
//         console.log('No users');
//         break;
//     case 'green':
//         console.log('Hello user');
//         break;
//     case 'yellow':
//         console.log('Hello user');
//         break;
//     default:
//         console.log('Hello users');
// }

// Numbers
// console.log(123);
// console.log(0xff);
// console.log(0b11111);

// console.log(1.23e-2);

// const n = 123;
// console.log(n.toString(16));
// console.log(123..toString(2));

// Math

// console.log(Math.random()); // 0..1
// console.log(Math.pow(10, 5));

// const input = 123.1
// console.log(Math.floor(input));
// console.log(Math.ceil(input));
// console.log(Math.round(input));
// console.log(Math.trunc(input));

// console.log(123.122345465.toFixed(2));

// console.log(+(1.1 + 2.2).toFixed(2) === 3.3);

// Strings

// console.log('string " string \' ');
// console.log("string \" ' ");
// console.log(`string ${1+2}`);
// console.log('line1\nline2\nline3\nline4');
// console.log('\\');

// console.log('string'.length);
// console.log('😀'.length);

// console.log('string'[3]);
// console.log('string'.charAt(3));
// console.log('string'[100]);
// console.log('string'.charAt(100));

// console.log('string'.toUpperCase());
// console.log('STRING'.toLocaleLowerCase());

// console.log('string'.indexOf('ring'));
// console.log('string string'.indexOf('ring'));
// console.log('string string'.lastIndexOf('ring'));
// const input = 'string';
// console.log(input.includes('string'));
// console.log(Boolean(input.indexOf('string')));
// console.log(input.indexOf('qwerty'));
// console.log(Boolean(input.indexOf('qwerty')));

// console.log('string'.startsWith('ring'));
// console.log('string'.startsWith('str'));

// console.log('string'.endsWith('ring'));
// console.log('string'.endsWith('str'));

// console.log('string' === 'STRING');

// console.log('string'.slice(2));
// console.log('string'.slice(2, 5));

// !!!
// console.log('string'.slice(2, -1));
// console.log('string'.substring(2, -1));

// const db = 'user1@mail.ua, user2@mail.ua';
// const email = '  user1@mail.ua  ';
// console.log(db.includes(email.trim()));


// Home Work

function calculate(number1, number2) {
    const sum = number1 + number2;
    console.log('sum => ', sum);
    return sum;
}

calculate(2, 3);

console.log('----------');
