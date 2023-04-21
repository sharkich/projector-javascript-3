export class Form {
    constructor({name, author, year, isbn}) {
        this.name = name;
        this.author = author;
        this.year = year;
        this.isbn = isbn;
    }

    getData () {
        return {
            name: this.name.value,
            author: this.author.value,
            year: this.year.value,
            isbn: this.isbn.value,
        }
    }

    clear() {
        this.name.value = '';
        this.author.value = '';
        this.year.value = '';
        this.isbn.value = '';
    }
}
