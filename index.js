'use strict';

import {Form} from "./classes/Form.js";
import {Table} from "./classes/Table.js";
import {Messages} from "./classes/Messages.js";
import {Book} from "./classes/Book.js";

console.log('log');

const form = new Form({
    name: document.getElementById('book_name'),
    author: document.getElementById('book_author'),
    year: document.getElementById('book_year'),
    isbn: document.getElementById('book_isbn'),
});
const table = new Table(
    document.getElementById('table_body'),
    ({name, author, year, isbn}) => `
            <td>${name}</td>
            <td>${author}</td>
            <td>${year}</td>
            <td>${isbn}</td>
            <td><button class="delete">x</button></td>
    `
);
const messages = new Messages();

document.getElementById('form').addEventListener('submit', (event) => {
    event.preventDefault();

    const book = new Book(form.getData());

    if (book.isValid) {
        table.addBook(book);
        messages.addSuccess(`Book ${book.name} added!`);
        form.clear();
    } else {
        messages.addFail('Invalid form');
    }
});
