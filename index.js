'use strict';

import {Form} from "./classes/Form.js";
import {Table} from "./classes/Table.js";
import {Messages} from "./classes/Messages.js";
import {Book} from "./classes/Book.js";

console.log('log');

const form = new Form({
    getName: () => document.getElementById('book_name').value,
    getAuthor: () => document.getElementById('book_author').value,
    getYear: () => document.getElementById('book_year').value,
    getIsbn: () => document.getElementById('book_isbn').value,
});
const table = new Table();
const messages = new Messages();

document.getElementById('form').addEventListener('submit', (event) => {
    event.preventDefault();

    console.log(form.isValid());

    // if (form.isValid()) {
    //     const book = new Book(form.getData());
    //     table.addBook(book);
    //     messages.addSuccess(`Book ${book.name} added!`);
    // } else {
    //     messages.addFail('Invalid form');
    // }
});
