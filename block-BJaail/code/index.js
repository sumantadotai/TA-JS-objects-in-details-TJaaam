let form = document.querySelector("form");
let rootBook = document.querySelector(".book-list");

const nameElm = form.elements.title;
const authorElm = form.elements.author;
const imgElm = form.elements.img;

class Book {
  constructor(name, author, img) {
    this.name = name;
    this.author = author;
    this.img = img;
    this.isRead = false;
  }
  toggleIsRead() {
    this.isRead = !this.isRead;
  }
}

class BookList {
  constructor(books = []) {
    this.books = books;
  }
  addBook(name, author, img) {
    let book = new Book(name, author, img);
    this.books.push(book);
    this.createUI();
  }
  createUI() {
    rootBook.innerHTML = "";
    this.books.forEach((book) => {
      let li = document.createElement("li");
      let img = document.createElement("img");
      img.src = book.img;
      let h1 = document.createElement("h1");
      h1.innerText = book.name;
      let p = document.createElement("p");
      p.innerText = book.author;
      let button = document.createElement("button");
      button.addEventListener("click", () => {
        book.toggleIsRead();
        this.createUI();
      });
      button.classList.add("read_btn");
      button.innerText = book.isRead ? "Completed!" : "Mark as read!";
      li.append(img, h1, p, button);
      rootBook.append(li);
    });
  }
}

let library = new BookList();

function handleSubmit(event) {
  event.preventDefault();
  const name = nameElm.value;
  const author = authorElm.value;
  const img = imgElm.value;
  library.addBook(name, author, img);
  nameElm.value = "";
  authorElm.value = "";
  imgElm.value = "";
}

form.addEventListener("submit", handleSubmit);
