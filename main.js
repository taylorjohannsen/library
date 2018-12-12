let x = 0;

function Book(author, title, pages, read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
}

function addBook() {
    let author = document.getElementById('authInput').value;
    let title = document.getElementById('titleInput').value;
    let pages = document.getElementById('pagesInput').value;
    let checkBox = document.getElementById('readInput').checked;

    if (checkBox == true) {
        read = 'Yes';
    } else if (checkBox == false) {
        read = 'No';
    }

    let bookInfo = new Book(author, title, pages, read);
    render(bookInfo);

    document.getElementById('authInput').value = "";
    document.getElementById('titleInput').value = "";
    document.getElementById('pagesInput').value = "";
    document.getElementById('readInput').checked = false;

    let inputForm = document.getElementById('bookForm');
    inputForm.style.display = 'none';
    let overLay = document.getElementById('overLay');
    overLay.style.display = 'none';
}

function render(bookInfo) {
    let bookAuthor = document.createElement('div');
    bookAuthor.textContent = 'Author - ' + bookInfo.author;

    let bookTitle = document.createElement('div');
    bookTitle.textContent = 'Title - ' + bookInfo.title;

    let bookPages = document.createElement('div');
    bookPages.textContent = 'Number of Pages - ' + bookInfo.pages;

    let bookRead = document.createElement('div');
    bookRead.textContent = 'Finished reading? - ' + bookInfo.read;
    
    let bookDelete = document.createElement('button');
    bookDelete.innerHTML = 'Delete Book';
    bookDelete.classList = 'delBttn';
    bookDelete.addEventListener ("click", function() {
        inputCont.removeChild(document.getElementById(authorDiv.id));
    })

    let authorDiv = document.createElement('div');
    authorDiv.className = "authorDiv";
    authorDiv.id = x;
    authorDiv.appendChild(bookTitle);
    authorDiv.appendChild(bookAuthor);
    authorDiv.appendChild(bookPages);
    authorDiv.appendChild(bookRead);
    authorDiv.appendChild(bookDelete);

    let inputCont = document.getElementById('inputCont');
    inputCont.appendChild(authorDiv);
    x++;
}

function displayForm() {
    let inputForm = document.getElementById('bookForm');
    inputForm.style.display = 'block';
    let overLay = document.getElementById('overLay');
    overLay.style.display = 'block';
}
