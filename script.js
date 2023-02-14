import Book from './book.js';

class BookList {
  constructor() {
    this.books = JSON.parse(localStorage.getItem('books')) || [];
    this.bookContainer = document.querySelector('.book-container');
    this.displayBooks();
  }

  displayBooks() {
    this.bookContainer.innerHTML = '';
    this.books.forEach((book) => {
      this.li = document.createElement('li');
      this.titleSpan = document.createElement('span');
      this.titleSpan.innerText = book.title;
      this.authorSpan = document.createElement('span');
      this.authorSpan.innerText = book.author;

      this.removeBtn = document.createElement('button');
      this.removeBtn.innerText = 'Remove';
      this.removeBtn.classList.add('remove-btn');
      this.removeBtn.setAttribute('data-id', book.id);
      this.removeBtn.addEventListener('click', this.removeBook.bind(this));

      this.li.appendChild(this.titleSpan);
      this.li.appendChild(this.authorSpan);
      this.li.appendChild(this.removeBtn);
      this.bookContainer.appendChild(this.li);
    });
  }

  addBook(newBook) {
    this.books.push(newBook);
    localStorage.setItem('books', JSON.stringify(this.books));
    this.displayBooks();
  }

  removeBook() {
    // remove the book from the dom
    console.log(this);
    console.log(this.btn);
    console.log(this.bookContainer);
    this.parentLi = this.btn.parentNode;
    this.bookContainer.removeChild(this.parentLi);
    // remove from the local storage
    const id = this.btn.getAttribute('data-id');
    const parseId = parseInt(id, 10);
    const index = this.books.findIndex((book) => book.id === parseId);
    console.log('index', index);
    console.log('parseId', parseId);
    this.books.splice(index, 1);
    // update it on the local storage the changes made
    localStorage.setItem('books', JSON.stringify(this.books));
  }
}

const booklist = new BookList();

// function to add newbook
const form = document.querySelector('#add-book');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = form.title.value;
  const author = form.author.value;
  const newBook = new Book(title, author);
  booklist.addBook(newBook);
  form.reset();
});