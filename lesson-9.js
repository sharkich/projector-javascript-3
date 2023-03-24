`use strict`;

// console.log('Start');
//
// function abc () {
//     console.log('abc');
// }
//
// window.abc();


// localStorage.setItem('course', 'JavaScriptV3');
// console.log(localStorage.getItem('course'));


// localStorage.setItem('course_map', JSON.stringify({ v: 'JavaScriptV3' }));
// console.log(JSON.parse(localStorage.getItem('course_map')));

// document.body.style.color = 'red';
//
// setTimeout(() => {
//     document.body.style.color = 'yellow';
// }, 5000);

// console.log(Array.from(window.header.childNodes).sort());

// console.log(window.header.children);


// console.log(document.getElementById('li-uniq'));

// console.log(document.getElementsByTagName('li'));
//
// const ul2Element = document.getElementById('ul2')
// console.log(ul2Element.getElementsByTagName('li'));

// console.log(document.getElementsByClassName('class1'));

// console.log(document.querySelectorAll('#ul1 > li'));
// console.log(document.querySelector('#ul1 > li'));

// const ul2Element = document.getElementById('ul2');
// console.log(ul2Element);
// console.log(ul2Element.matches('.class2'));

// const ul2Element = document.getElementById('ul2');
// console.log(ul2Element.closest('.div1'));

// const ul1Element = document.getElementById('ul1');
// const ul2Element = document.getElementById('ul2');
// const liElement = document.getElementById('li-uniq');
// console.log(ul1Element.contains(liElement), ul2Element.contains(liElement));

// console.log(document.getElementsByName('phone'));

// manipulation
// const elements = document.getElementsByTagName('li');
// console.log(elements);
//
// const newLiElement = document.createElement('li');
// // newLiElement.innerHTML = '<b>New Li</b>';
// newLiElement.innerText = '<b>New Li</b>';
// newLiElement.style.color = 'green';
// newLiElement.className = 'newLi';
//
// const ul1Element = document.getElementById('ul1');
// ul1Element.append(newLiElement);
//
// console.log(elements);


// const ul1Element = document.getElementById('ul1');
// ul1Element.insertAdjacentHTML('beforebegin', '<div>Before</div>');
// ul1Element.insertAdjacentText('afterend', '<div>After</div>');
// const newLiElement = document.createElement('li');
// newLiElement.innerHTML = '<b>New Li</b>';
// ul1Element.insertAdjacentElement('afterbegin', newLiElement);

// const ul1Element = document.getElementById('ul1');
// const clone = ul1Element.cloneNode(true);
// document.getElementById('insert-here').append(clone);

// document.getElementById('ul2').remove();


// const ul1 = document.getElementById('ul1');
// console.log(ul1.className);
// ul1.className = 'red';
// console.log(ul1.className);

// DEFAULT
// const ul1 = document.getElementById('ul1');
// ul1.classList.add('red');
// setInterval(() => ul1.classList.toggle('red'), 100);

// const ul1 = document.getElementById('ul1');
// ul1.style.borderTop = '1px solid red';
// ul1.style.marginTop = '200px';
// console.log(ul1);

// const ul1 = document.getElementById('ul1');
// ul1.style.cssText = 'border-top: 1px solid red; margin-top: 200px;';


// const ul1 = document.getElementById('ul1');
// ul1.style.cssText = 'border-top: 1px solid red; margin-top: 200px;';
// const cssObj = window.getComputedStyle(ul1, null);
// let bgColor = cssObj.getPropertyValue("margin-bottom");
// console.log(bgColor);

// Position

// const ul1 = document.getElementById('ul1');
// const {x, y} = ul1.getBoundingClientRect();
// console.log();
//
// const el = document.createElement('div');
// el.classList.add('absolute');
// el.style.top = `${y}px`;
// el.style.left = `${x}px`;
// document.body.append(el);

// const element = document.querySelector('#title::before');
// const style = window.getComputedStyle(
//     document.querySelector('#title'), ':before'
// );
// console.log(style);
