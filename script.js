const books = [
  {
    name: 'Beyond Order',
    author: 'Jordan Peterson',
  },
  {
    name: 'Sapiens',
    author: 'Yuval Harrari',
  },
];

const bookContainer = document.querySelector('.book-container');

function displayBooks() {
  books.forEach((item) => {
    const li = document.createElement('li');
    const innerHtml = ` 
        <span>${item.name}</span>
        <span>${item.author}</span>
        <button class="remove-btn">Remove</button>`;
    li.innerHTML = innerHtml;
    bookContainer.appendChild(li);
  });
}

displayBooks();

// function to add newbook

const form = document.querySelector('#add-book');
form.addEventListener("submit",(e) => {
    e.preventDefault();
    const title = form.title.value;
    const author = form.author.value;
    console.log(title);
});