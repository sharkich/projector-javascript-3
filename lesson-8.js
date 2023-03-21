`use strict`;

// замикання - робота над помилками

// кейс перший - простий

// let test = 666;
// debugger;
// function a() {
//   console.log(test);
// }
//
// function b() {
//   let test = 777;
//   console.log(test);
// }
//
// test = 888;
//
// a(); // 888
// b(); // 777

// кейс другий - складніший

// let test = 666;
// function a() {
//   console.log(test); // 666
// }
//
// function b() {
//   let test = 777;
//   a();
// }
//
// b();

// кейс третій - складніший

// let test = 666;
//
// function b() {
//   let test = 777;
//   function a() {
//     console.log(test); // 777
//   }
//   a();
// }
//
// b();

// setTimeout

// function sayHi(name1, name2) {
//   console.log( 'Hi!', name1, name2 );
//   return undefined;
// }
//
// setTimeout(() => sayHi('Hello', 'Petro'), 7000);

// або

// console.log('start');
// setTimeout(() => console.log( 'hello' ), 0);
// console.log('finish');

// приклад clearTimeout

// function sayHi(phrase, who) {
//   console.log( phrase + ', ' + who );
// }
//
// let delay = 7000;
//
// const timerId = setTimeout(sayHi, delay, "Hello", "Petro");
// console.log('timerId -', timerId);
// clearTimeout(timerId);

// setInterval

// function sayHi(phrase, who) {
//   console.log( phrase + ', ' + who );
// }
//
// console.log('start');
// let timerId = setInterval(sayHi, 2000, "Hello", "Petro");
//
// setTimeout(() => { clearInterval(timerId); console.log('stop'); }, 10000);

// альтернатива - вкладений setTimeout

// простий приклад

// let timerId = setTimeout(function tick() {
//   console.log('ping');
//   timerId = setTimeout(tick, 2000); // ось вкладений setTimeout
// }, 2000);

// практичний приклад  - сервіс з гнучкою витримкою часу запитів на бекенд

// let delay = 5000; // витримка часу по якій будуть робитись запити
//
// let timerId = setTimeout(function request() {
//   // логіка яка робить запит на бекенд
//
//   if (/* якась помилка запиту на бекенд */) {
//     // збільшуємо витримку часу
//     delay *= 2;
//   }
//
//   timerId = setTimeout(request, delay);
//
// }, delay);

// частковий приклад - setTimeout з нульовою затримкою
// Це планує виклик func настільки швидко, наскільки це можливо. Але планувальник викликатиме функцію лише після завершення виконання поточного коду.

// setTimeout(() => console.log("Moto"));
//
// console.log("Hello");
//
// setTimeout(()=> console.log(1));
// setTimeout(()=> console.log(2), 1);
//
// console.log(3);
//
// setTimeout(()=> console.log(4));

// Hello, Moto, 3, 1, 2, 4
// Hello, 3, Moto, 1, 2, 4
// Hello, 3, Moto, 1, 4, 2

// методи об'єктів

// Приклади написання методів об'єктів

// const user = {
// 	name: 'Helga',
// 	gender: 'female',
// 	age: 43
// }

// варіант 1

// let user = {
//   name: 'Helga',
//   gender: 'female',
//   age: 43,
//   hi1: function () {
//     console.log(`Hi1, ${this.name}`);
//   },
//   hi2: () => {
//     console.log(`Hi2, ${this.name}`);
//   },
//   hi3 () {
//     console.log(`Hi3, ${this.name}`);
//   },
// };
//
// user.hi1();
// user.hi2();
// user.hi3();
//
// const user2 = user;
// user = null;
//
// user2.hi1();
// user2.hi2();
// user2.hi3();

// варіант 2

// let user = {
//   name: 'Helga',
//   gender: 'female',
//   age: 43
// };
//
// function sayPhrase(phrase) {
//   console.log(phrase);
// }
//
// user.sayPhrase = sayPhrase;
//
// user.sayPhrase('Здоров!');

// варіант 3

// const user = {
//   name: 'Helga',
//   gender: 'female',
//   age: 43,
//   sayPhrase: function(phrase) {
//   	console.log(phrase);
//   }
// }
//
// user.sayPhrase('Що там?');

// варіант 4

// const user = {
//   name: 'Helga',
//   gender: 'female',
//   age: 43,
//   sayPhrase(phrase) {
//   	console.log(phrase);
//   }
// }
//
// user.sayPhrase('Як там?');


// // Ключове слово`this`

// const user = {
//   name: 'Helga',
//   gender: 'female',
//   age: 43,
//   introduce() {
//   	console.log(`My name is ${this.name}!`);
//   }
// }
//
// user.introduce();

// 	// приклад чому не варто використовувати пряме посилання

// let user = {
//   name: 'Helga',
//   gender: 'female',
//   age: 43,
//   introduce() {
//     console.log(`My name is ${user.name}!`);
//   }
// }
//
// let anotherUser = user;
// user = null;
//
// anotherUser.introduce();

// // `this` не є фіксованим, воно обчислюється залежно від місця виконання коду

// function introduce() {
//   console.log(`My name is ${this.name}!`);
// }
//
//  let user = {
//   name: 'Helga',
//   gender: 'female',
//   age: 43,
//   introduce
// };
//
// let anotherUser = {
//   name: 'Derek',
//   gender: 'male',
//   age: 35,
//   introduce
// };
//
// user.introduce();
// anotherUser.introduce();


// // `this` відсутній у стрілкових функцій, вони беруть this з оточення

// let user = {
// 	name: "Derek",
// 	gender: 'male',
// 	roles: ["admin", "user", "husband"],
// 	age: 35,
// 	introduce() {
// 		let arrow = () => console.log(`My name is ${this.name}!`);
// 		arrow();
// 	},
// 	showRoles() {
// 	    this.roles.forEach(role => console.log(`One of my roles - \'${role}\'`));
// 	},
//     hi: () => console.log('name', this.name)
// };
//
// user.introduce();
// user.showRoles();
// user.hi();


// let introduceRealName = () => {
// 	console.log(`My real name is ${this.someSecretName}`);
// }
//
// globalThis.someSecretName = 'Oleg';
//
// introduceRealName(); // Oleg

// контекст виконання

// проблема втрати контексту

// function sayHi() {
//   console.log(`Мене звати ${this.firstName}!`);
// }
//
// let user = {
//   firstName: "Василь",
//   sayHi
// };
//
// user.sayHi();
//
// setTimeout(user.sayHi,1000);

// Ненадійне рішення - використання функцій-обгорток

// let user = {
// 	firstName: "Василь",
// 	sayHi() { console.log(`Мене звати ${this.firstName}!`);}
// };
//
// setTimeout(function(){
//   user.sayHi();
// }, 1000)

// або

// let user = {
//   firstName: "Василь",
//   sayHi() {
//     console.log(`Мене звати	${this.firstName}!`);
//   }
// };
//
// setTimeout(() => user.sayHi(), 1000);

// демонстрація ненадійності

// let user = {
//   firstName: "Василь",
//   sayHi() {
//   	console.log(`Мене звати ${this.firstName}!`);
//   }
// };
//
// setTimeout(() => user.sayHi(), 1000)
//
// user = {
// 	sayHi() {
// 		console.log('Nope!')
// 	}
// }

// надійне рішення - bind

// let user = {
//   firstName: "Василь",
//   sayHi() {
//     console.log(`Мене звати ${this.firstName}!`);
//   }
// };
//
// let bindedSayHi = user.sayHi.bind(user);
//
// setTimeout(bindedSayHi, 1000)
//
// user = {
// 	sayHi() {
// 		console.log('Nope!')
// 	}
// }

// bind при потребі може прив'язувати тільки `this` та не впливати на аргументи

// let user = {
//   firstName: "Василь",
//   sayHi() {
//     console.log(`Мене звати ${this.firstName}!`);
//   },
//   sayPhrase(phrase) {
//   	console.log(`${phrase} ${this.firstName}!`);
//   }
// };
//
// let bindedSayHi = user.sayHi.bind(user);
// let bindedSayPhrase = user.sayPhrase.bind(user);
//
// setTimeout(bindedSayHi, 1000)
//
// bindedSayPhrase('Здоров');

// При потребі можемо прив'язувати аргументи

// let user = {
//   firstName: "Василь",
// };

// function sayPhrase(phrase) {
//   console.log(`${phrase} ${this.firstName}!`);
// }

// let bindedSayHi = sayPhrase.bind(user,'Привіт');
// let bindedSayBye = sayPhrase.bind(user, 'Бувай');

// setTimeout(bindedSayBye, 1000)
//
// bindedSayHi();

// let user = {
//   firstName: "Василь",
// };
//
// function say(phrase = 'Та й таке') {
// 	console.log(`${phrase} ${this.firstName}`);
// }
//
// let bindedSay = say.bind(user, 'То є жичє');
//
// bindedSay('Жизнь то така вещь'); // Василь


// call / apply

// const book1 = {
// 	title: 'Brave New World',
// 	author: 'Aldous Huxley',
// }
//
// const book2 = {
// 	title: '1984',
// 	author: 'George Orwell',
// }
//
// function summary() {
// 	console.log(`${this.title} was written by ${this.author}.`)
// }
//
//
// const f1 = summary.bind(book1);
// f1();
//
// summary.bind(book2)();
//
// summary.call(book1);
// summary.apply(book2);



// розгляд карірування з цими методами

// const book1 = {
// 	title: 'Brave New World',
// 	author: 'Aldous Huxley',
// }
//
// function longerSummary(genre, year) {
// 	console.log(
// 	`${this.title} was written by ${this.author}. It is a ${genre} novel written in ${year}.`
// 	)
// }
//
// longerSummary.call(book1, 'dystopian', 1932)
// longerSummary.apply(book1, ['dystopian', 1948])

// Практичний приклад - як можна позичати методи

// function minimisedSummary(...args) {
//   console.log( [].join.call(args, ', ') );
// }
//
// minimisedSummary('1984', 'George Orwell') // "1984, George Orwell"
// minimisedSummary('Brave New World', 'Aldous Huxley', 'dystopian', 1932) // "Brave New World, Aldous Huxley, dystopian, 1932"


// пРАТКИЧНИЙ ПРИКЛАД - патерн 'декоратор'
// Розберемо цей приклад для розуміння

// function sum(a, b) {
//   console.log( a + b );
// }
//
// function logger(func) {
//
//   function wrapper(...args) { 	// оголошуємо функцію яка приймає аргументи масивом
//     wrapper.logs.push(	// у користувацьку властивість ми пушимо
// 	    {
// 	    	args: args, // присвоюємо властовості 'args' масив args
// 	      	timeStamp: new Date(), // додаємо поточний момент
// 	    }
//     );
//
//     return func.apply(this, args); // повертаємо виклик базової функції з її аргументами
//   }
//
//   wrapper.logs = []; // оголошуємо свою властивість для функції і присвоюємо їй порожній масив
//
//   return wrapper;
// }
//
// const loggedSum = logger(sum);
//
// loggedSum(1, 2);
// loggedSum(4, 5);
// console.log(loggedSum.logs);

// інший практичний Приклад - каррінг
// Розберемо цей приклад для розуміння

// function curry(func) { 					// оголошуємо функцію та передаємо в неї функцію
//
//   return function curried(...args) {	// повертаємо функцію яка приймає аргументи функції curried масивом
//     if (args.length >= func.length) {	// оголошуємо умову порівняння кількості аргументів
//       return func.apply(this, args);	// якщо аргументів більше або дорівнює то ми повертаємо
//       									// базову функцію з привязкою до цього контексту та
//       									// аргументами які передали у функцію curried
//     } else {							// або
//       return function(...args2) {		// повертаємо безіменну функцію яка приймає аргументи функції масивом
//         return curried.apply(this, args.concat(args2)); // повертаємо функцію curried з привязкою до поточного
//         								// контексту і з масивом аргументів який складається з
//         								// об'єднаних мамсисвів аргументів функцій curried і поточної
//       }
//     }
//   };
// }
//
// function sum(a, b, c) {
//   return a + b + c;
// }
//
// let curriedSum = curry(sum);
//
// console.log( curriedSum(1, 2, 3) );
//
// console.log( curriedSum(1)(2,3) );
// console.log( curriedSum(1,2)(3) );
// console.log( curriedSum(1)(2)(3) );


// const xxx = (v, a, b) => a * v + b * v;
// [1, 2, 3].reduce((a, b) => xxx(2), 0);

// const xxx = (v) => (a, b) => a * v + b * v;
// [1, 2, 3].reduce(xxx(2), 0);


// Користувацькі властивості
// їх можна використовувати замість замикання:

// function makeCounter() {
//
//   function counter() {
//     return ++counter.count;
//   };
//
//   counter.count = 0;
//
//   return counter;
// }
//
// let counter = makeCounter();
//
// counter.count = 10;
// console.log(counter());
// counter.count = 100;
// console.log(counter());

// 		Основна відмінність у тому, що якщо значення count живе у зовнішній змінній, воно не доступне для зовнішнього коду. Змінити його можуть лише вкладені функції. Якщо ж воно присвоєно як властивість функції, ми можемо його отримати чи змінити ззовні

// Named Function Expression
	// ось звичайна FE

// let sayHi = function(who) {
//   console.log(`Hello, ${who}`);
// };
//
// sayHi("Ivan");
//
// 	// ось NFE
//
// let sayHi = function func(who) {
//   console.log(`Hello, ${who}`);
// };
//
// sayHi("Ivan");

// 	// дозволяє
// 	// посилатись на саму себе

// let sayHi = function func(who) {
//   if (who) {
//     console.log(`Hello, ${who}`);
//   } else {
//    func("Guest");
//   }
// };
//
// sayHi(); // Hello, Guest
// sayHi('Alyona');

// func(); // помилка func не доступна за межами функції

// 	// приклад реалізації захисту від перезапису

// let sayHi = function func(who) {
//   if (who) {
//     console.log(`Hello, ${who}`);
//   } else {
//     sayHi("Guest");
//   }
// };
//
// let welcome = sayHi;
// sayHi = null;
//
// welcome();
// sayHi();

