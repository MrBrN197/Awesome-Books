const addBtn = document.querySelector('.add-book-btn');
let bookList = [];
addBtn.addEventListener('click', () => {
  // add book

  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  addBook(title, author);
  const booksCollection = document.querySelector('.books');

  const div = document.createElement('div');
  div.innerHTML = `
    <h2>${title}</h2>
    <p>${author}</p>
  `;

  const removeBtn = document.createElement('button');
  removeBtn.innerText = 'Remove';
  removeBtn.addEventListener('click', () => {
    console.log(title, author)
   removeBook(div, title, author)
  });

  div.appendChild(removeBtn);

  booksCollection.appendChild(div);
});

function addBook(title, author) {
  bookList.push({title, author});
  localStorage.setItem('books', JSON.stringify(bookList))
}

function removeBook(element, title, author) {
  element.remove();
  console.log(title, author);
  bookList = bookList.filter( (book) => {
    return book.title !== title || book.author !== author
  })
  localStorage.setItem('books', JSON.stringify(bookList))
  console.log(bookList)
}
