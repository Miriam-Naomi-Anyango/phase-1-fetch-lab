function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  return fetch("https://anapioficeandfire.com/api/books")
         .then(res => res.json())
         .then(data => renderBooks(data))
}

function renderBooks(data) {
  const main = document.querySelector("main");
  data.forEach(book => {
    const h2 = document.createElement("h2");
    h2.innerHTML = `<h2>${book.name}</h2>`;
    main.appendChild(h2);
  });
}

document.addEventListener("DOMContentLoaded", function() {
 fetchBooks();
});


