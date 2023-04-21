export function Form({name, author, year, isbn}) {
    this.name = name;
    this.author = author;
    this.year = year;
    this.isbn = isbn;
}

Form.prototype.getData = function () {
    return {
        name: this.name.value,
        author: this.author.value,
        year: this.year.value,
        isbn: this.isbn.value,
    }
}

Form.prototype.clear = function () {
    this.name.value = '';
    this.author.value = '';
    this.year.value = '';
    this.isbn.value = '';
}
