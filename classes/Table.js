export class Table {

    constructor(tableBody, generateRow) {
        this.tableBody = tableBody;
        this.generateRow = generateRow;
    }

    addBook(book) {
        const row = document.createElement('tr');
        row.innerHTML = this.generateRow(book);
        this.tableBody.append(row);
    }

}
