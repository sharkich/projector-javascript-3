export class Form {
    constructor({getName, getAuthor, getYear, getIsbn}) {
        this.getName = getName;
        this.getAuthor = getAuthor;
        this.getYear = getYear;
        this.getIsbn = getIsbn;
    }

    isValid () {
        return !!this.getName()
            && !!this.getAuthor()
            && !!this.getYear()
            && !!this.getIsbn();
    }

    getData () {
        return {
            name: '',
            author: '',
            year: '',
            isbn: '',
        }
    }
}
