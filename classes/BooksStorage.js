export class BooksStorage {
    key = 'books';

    getBooks() {
        const rawBooks = localStorage.getItem(this.key);
        if (!rawBooks) {
            return [];
        }
        return JSON.parse(rawBooks);
    }

    addBook(book) {
        const books = this.getBooks();
        localStorage.setItem(this.key, JSON.stringify([...books, book]));
    }
}
