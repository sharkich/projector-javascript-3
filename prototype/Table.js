export function Table(tableBody, generateRow) {
    this.tableBody = tableBody;
    this.generateRow = generateRow;
}

Table.prototype.addBook = function (book) {
    const row = document.createElement('tr');
    row.innerHTML = this.generateRow(book);
    this.tableBody.append(row);
}
