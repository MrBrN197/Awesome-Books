class BookLibrary {
  constructor() {
    this.booksCollection = document.querySelector('.books');
    this.bookList = JSON.parse(localStorage.getItem('books')) || [];
    this.bookList.forEach((book) => {
      this.createBookElement(book.title, book.author);
    });
  }

  addBook(title, author) {
    this.bookList.push({ title, author });
    localStorage.setItem('books', JSON.stringify(this.bookList));
    this.createBookElement(title, author);
  }

  createBookElement(title, author) {
    const div = document.createElement('div');
    div.classList.add('book');
    div.innerHTML = `
    <p>"${title}" by ${author}</p>
    `;

    const removeBtn = document.createElement('button');
    removeBtn.innerText = 'Remove';
    removeBtn.addEventListener('click', () => {
      this.removeBook(div, title, author);
    });

    div.appendChild(removeBtn);

    this.booksCollection.appendChild(div);
  }

  removeBook(element, title, author) {
    element.remove();
    this.bookList = this.bookList.filter((book) => book.title !== title || book.author !== author);
    localStorage.setItem('books', JSON.stringify(this.bookList));
  }
}

const bookLibrary = new BookLibrary();

const addBtn = document.querySelector('.add-book-btn');

addBtn.addEventListener('click', () => {
  // add book

  const titleElement = document.getElementById('title');
  const authorElement = document.getElementById('author');
  const title = titleElement.value
  const author = authorElement.value
  if (!title || !author) {
    return;
  }
  bookLibrary.addBook(title, author);
  titleElement.value = "";
  authorElement.value = "";
});
