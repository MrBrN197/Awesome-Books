const addBtn = document.querySelector('.add-book-btn');

addBtn.addEventListener('click', () => {
  // add book

  const title = document.querySelectorAll('input')[0];
  const author = document.querySelectorAll('input')[1];

  const booksCollection = document.querySelector('.books');

  const div = document.createElement('div');
  div.innerHTML = `
    <h2>${title.value}</h2>
    <p>${author.value}</p>
  `;

  const removeBtn = document.createElement('button');
  removeBtn.innerText = 'Remove';
  removeBtn.addEventListener('click', () => {
    div.remove();
  });

  div.appendChild(removeBtn);

  booksCollection.appendChild(div);
});
