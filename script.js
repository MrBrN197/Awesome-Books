let bookList = JSON.parse(localStorage.getItem('books')) || [];

function addBook(title, author) {
  bookList.push({ title, author });
  localStorage.setItem('books', JSON.stringify(bookList));
}

function removeBook(element, title, author) {
  element.remove();
  bookList = bookList.filter((book) => book.title !== title || book.author !== author);
  localStorage.setItem('books', JSON.stringify(bookList));
}

const booksCollection = document.querySelector('.books');

bookList.forEach((book) => {
  const div = document.createElement('div');
  div.innerHTML = `
    <h2>${book.title}</h2>
    <p>${book.author}</p>
  `;

  const removeBtn = document.createElement('button');
  removeBtn.innerText = 'Remove';
  removeBtn.addEventListener('click', () => {
    removeBook(div, book.title, book.author);
  });

  div.appendChild(removeBtn);

  booksCollection.appendChild(div);
});

const addBtn = document.querySelector('.add-book-btn');

addBtn.addEventListener('click', () => {
  // add book

  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  if (!title || !author) {
    return;
  }

  addBook(title, author);

  const div = document.createElement('div');
  div.innerHTML = `
    <h2>${title}</h2>
    <p>${author}</p>
  `;

  const removeBtn = document.createElement('button');
  removeBtn.innerText = 'Remove';
  removeBtn.addEventListener('click', () => {
    removeBook(div, title, author);
  });

  div.appendChild(removeBtn);

  booksCollection.appendChild(div);
});