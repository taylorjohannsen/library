let myLibrary = [];

function Book(author, title, pages, read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        console.log(author, title, pages, read);
    }
}

function addBook() {

}

const oneBook = new Book('Taylor Johannsen', 'Outliers', '400 pages', 'False')

console.log(oneBook.author);