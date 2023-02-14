const books = JSON.parse(localStorage.getItem('books')) || [];
const bookContainer = document.querySelector('.book-container');

function removeBook(btn) {
  // remove the book from the dom
  const parentLi = btn.parentNode;
  bookContainer.removeChild(parentLi);
  // remove from the local storage
  const id = btn.getAttribute('data-id');
  const parseId = parseInt(id, 10);
  const index = books.findIndex((book) => book.id === parseId);
  books.splice(index, 1);
  // update it on the local storage the changes made
  localStorage.setItem('books', JSON.stringify(books));
}

function displayBooks() {
  bookContainer.innerHTML = '';
  localStorage.setItem('books', JSON.stringify(books));

  books.forEach((book) => {
    const li = document.createElement('li');
    const titleSpan = document.createElement('span');
    titleSpan.innerText = book.title;
    const authorSpan = document.createElement('span');
    authorSpan.innerText = book.author;

    const removeBtn = document.createElement('button');
    removeBtn.innerText = 'Remove';
    removeBtn.classList.add('remove-btn');
    removeBtn.setAttribute('data-id', book.id);

    removeBtn.addEventListener('click', () => {
      removeBook(removeBtn);
    });
    li.appendChild(titleSpan);
    li.appendChild(authorSpan);
    li.appendChild(removeBtn);
    bookContainer.appendChild(li);
  });
}

displayBooks();

// function to add newbook

const form = document.querySelector('#add-book');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = form.title.value;
  const author = form.author.value;
  books.push({ title, author, id: Date.now() });
  displayBooks();
  form.reset();
});