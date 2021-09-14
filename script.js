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

window.addEventListener('load', () => {
  const { DateTime } = luxon;
  const now = DateTime.now();
  document.querySelector('.date').innerText = now.toLocaleString(DateTime.DATETIME_MED);
});

const bookLibrary = new BookLibrary();

const addBtn = document.querySelector('.add-book-btn');

addBtn.addEventListener('click', () => {
  // add book

  const titleElement = document.getElementById('title');
  const authorElement = document.getElementById('author');
  const title = titleElement.value;
  const author = authorElement.value;
  if (!title || !author) {
    return;
  }
  bookLibrary.addBook(title, author);
  titleElement.value = '';
  authorElement.value = '';
});

const bookListSection = document.getElementById('book-list');
const addBookSection = document.getElementById('add-books');
const contactSection = document.getElementById('contact-info');
const links = document.querySelectorAll('header .links .link');

function removeLinks() {
  links.forEach((link) => {
    link.classList.remove('selected');
  });
}

/* eslint-disable no-unused-vars */
const displayBookList = (elem) => {
  bookListSection.style.display = 'block';
  addBookSection.style.display = 'none';
  contactSection.style.display = 'none';
  removeLinks();
  elem.classList.add('selected');
};
const displayAddBooks = (elem) => {
  bookListSection.style.display = 'none';
  addBookSection.style.display = 'block';
  contactSection.style.display = 'none';
  removeLinks();
  elem.classList.add('selected');
};
const displayContact = (elem) => {
  bookListSection.style.display = 'none';
  addBookSection.style.display = 'none';
  contactSection.style.display = 'block';
  removeLinks();
  elem.classList.add('selected');
};