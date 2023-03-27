`use strict`;

console.log('Lesson 10');

// const el = document.querySelector('#div1-2');
// el.style.borderColor = 'red';
// el.style.borderWidth = '4px';
// console.log(el.offsetLeft, el.offsetTop);
// console.log(el.offsetWidth, el.offsetHeight);
// console.log(el.clientLeft, el.clientTop);
// console.log(el.clientWidth, el.clientHeight);
// console.log(el.scrollWidth, el.scrollHeight);
// el.scrollTop = 100;
// console.log(el.scrollLeft, el.scrollTop);
//
// const scrollbarWidth = el.offsetWidth - el .clientWidth;
// console.log(scrollbarWidth);
//
// const documentScrollbarWidth = document.body.offsetWidth - document.body.clientWidth;
// console.log(documentScrollbarWidth);
//
//
// console.log(el.getBoundingClientRect());
//
//
// console.log(document.elementFromPoint(220, 150));

// Attributes

// const el = document.querySelector('#div1-1');
// el.style.borderColor = 'red';
// el.style.borderWidth = '4px';
// console.log(el.hasAttribute('name'));
// el.setAttribute('name', 'some-name');
// console.log(el.getAttribute('name'));
// console.log(el.attributes);

// Custom data attributes
// const el = document.querySelector('[data-testid="321"]');
// console.log(el);
// console.log(el.dataset);


// const el = document.querySelector('[data-testid="321"]');
// console.log(el);
// console.log(el.nodeType);
// console.log(el.nodeName, el.tagName);
// console.log(el.innerHTML);
// console.log(el.textContent);
// console.log(el.outerHTML);
// console.log(el.nodeValue); // comments + texts
// console.log(el.hidden);
// el.hidden = true;

// Events
// const el = document.querySelector('#div1-2');
// el.style.borderColor = 'red';
// el.style.borderWidth = '4px';
//
// const listener = (event) => {
//     console.log('click', event);
// };
//
// // <div id="div2" class="div" onclick="console.log(123)">
// // el.onclick = listener;
// el.addEventListener('click', listener);

// const el1 = document.querySelector('#div1');
// el1.style.borderColor = 'red';
// el1.style.borderWidth = '2px';
// el1.addEventListener('click', () => {
//     console.log('click 1');
// });
//
//
// const el12 = document.querySelector('#div1-2');
// el12.style.borderColor = 'red';
// el12.style.borderWidth = '2px';
// el12.addEventListener('click', () => {
//     console.log('click 1.2');
// });
//
// const el122 = document.querySelector('#div1-2-2');
// el122.style.borderColor = 'red';
// el122.style.borderWidth = '2px';
// el122.addEventListener('click', (event) => {
//     console.log('click 1.2.2', event.isTrusted, event.target);
//     event.preventDefault();
//     event.stopPropagation();
// });
//
// // Custom events
//
// function highlight(elem) {
//     const bgColor = 'blue';
//     elem.style.backgroundColor = bgColor;
//
//     const event = new CustomEvent('highlight', {
//         detail: {
//             backgroundColor: bgColor
//         }
//     });
//     elem.dispatchEvent(event);
// }
//
// const redBtn = document.querySelector('.redBtn');
//
// const addBorder = (elem) => {
//     elem.style.border = "solid 1px red";
// }
//
// redBtn.addEventListener('highlight',  (e) => {
//     addBorder(redBtn);
//
//     console.log(e);
// });
//
// highlight(redBtn);

// v
// Array.from(els).map(div => div.style.borderColor = 'red');

const mouse = document.querySelector('#mouse');

const listener = (event) => {
    mouse.style.left = event.clientX + 'px';
    mouse.style.top = event.clientY + 'px';
};
document.addEventListener('mousemove', listener);

const form = document.querySelector('#form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    document.removeEventListener('mousemove', listener);
});

