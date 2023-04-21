export function Book({name, author, year, isbn}) {
    this.name = name;
    this.author = author;
    this.year = year;
    this.isbn = isbn;
}

Book.prototype.isValid = function () {
    return !!this.name && !!this.author && !!this.year && !!this.isbn;
}
