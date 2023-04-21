export class Book {

    constructor({name, author, year, isbn}) {
        this.name = name;
        this.author = author;
        this.year = year;
        this.isbn = isbn;
    }

    get isValid() {
        return !!this.name && !!this.author && !!this.year && !!this.isbn;
    }

}
