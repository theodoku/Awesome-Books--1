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
