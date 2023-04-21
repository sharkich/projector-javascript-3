'use strict';

import {Form} from "./classes/Form.js";
import {Table} from "./classes/Table.js";
import {Messages} from "./classes/Messages.js";
import {Book} from "./classes/Book.js";

console.log('log');

const form = new Form();
const table = new Table();
const messages = new Messages();

document.getElementById('form').addEventListener('submit', (event) => {
    event.preventDefault();

    if (form.isValid) {
        const book = new Book(form.data);
        table.addBook(book);
        messages.addSuccess(`Book ${book.name} added!`);
    } else {
        messages.addFail('Invalid form');
    }
});
