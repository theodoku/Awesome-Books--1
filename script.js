const books = JSON.parse(localStorage.getItem('books')) || [];
const bookContainer = document.querySelector('.book-container');

// function removeBook(btn, i) {
//   // const parentLi = btn.parentNode;
//   // bookContainer.removeChild(parentLi);
  
// }

function displayBooks() {
  bookContainer.innerHTML = '';
  localStorage.setItem('books', JSON.stringify(books));

  books.forEach((item) => {
    const li = document.createElement('li');
    const innerHtml = ` 
        <span>${item.title}</span>
        <span>${item.author}</span>
        <button class="remove-btn">Remove</button>`;
    li.innerHTML = innerHtml;
    bookContainer.appendChild(li);
    const removeBtns = document.querySelectorAll('.remove-btn');
    [...removeBtns].forEach((btn, i) => {
      btn.addEventListener('click', () => {
        books.splice(i, 1);
        // localStorage.setItem('books', JSON.stringify(books));
        displayBooks();
      });
    });
  });
}

displayBooks();

// function to add newbook

const form = document.querySelector('#add-book');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = form.title.value;
  const author = form.author.value;
  books.push({ title, author });
  displayBooks();
  form.reset();
});