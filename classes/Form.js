export class Form {
    constructor({getName, getAuthor, getYear, getIsbn}) {
        this.getName = getName;
        this.getAuthor = getAuthor;
        this.getYear = getYear;
        this.getIsbn = getIsbn;
    }

    getData () {
        return {
            name: this.getName(),
            author: this.getAuthor(),
            year: this.getYear(),
            isbn: this.getIsbn(),
        }
    }
}
