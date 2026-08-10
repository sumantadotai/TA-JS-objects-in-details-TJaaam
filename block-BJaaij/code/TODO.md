## An object-oriented book-list!

- [ ] Create a class BookList
- [ ] Create another class called Book

#### Each Book should have several properties:

1. Title
2. Category
3. Author
4. isRead (default to `false`)
5. finishedDate

Book class will have the following methods:

- `markBookAsRead` when called will change the `isRead` property on the book to be `true`. It will also change the `finishedDate` to be the `Date.now()` when this function is called.

#### BookList should have the following properties:

1. An array of all the Books
2. Current read book index

#### BookList Methods

- [] `add([Book])` will accept an array (list of books). Once the method is called the book will added to the list.
- [] `getCurrentBook()` should return the current book using the `index` and the book array
- [] `getNextBook()` should return the next book using the `index` and the book array
- [] `getPrevBook()` should return the previous book using the `index` and the book array
- [] `changeCurrentBook` should accept one parameter and update the current index.

After creating the Book and BookList class create 5 book object and add it to list. Test all the methods in Book and BookList class.

```javascript
class Book {
  constructor(title, category, author) {
    this.title = title;
    this.category = category;
    this.author = author;
    this.isRead = false;
    this.finishedDate = null;
  }
  markBookAsRead() {
    this.isRead = true;
    this.finishedDate = Date.now();
  }
}

class Booklist {
  constructor() {
    this.AllBooks = [];
    this.index = 0;
  }

  add([Book]) {
    return this.AllBooks.push(Book);
  }
  getCurrentBook() {
    return this.AllBooks[this.index];
  }
  getNextBook() {
    this.index++;
    return this.AllBooks[this.index];
  }
  getPrevBook() {
    this.index--;
    return this.AllBooks[this.index];
  }
  changeCurrentBook(index) {
    this.index = index;
  }
}

let book1 = new Book(
  "The Old Man and the Sea",
  "Allegory, Nautical fiction",
  "Ernest Hemigway"
);

let book2 = new Book("Harry Potter", "Fantasy", "J K Rowling");
let book3 = new Book("Lord of the rings", "Fantasy", "Tolkins");
let book4 = new Book("Wings of fire", "Autobiography", "A P J");
let book5 = new Book("Animal Farm", "Political Satire", "Gorge Orewell");
let book6 = new Book("Trapped", "Fantasy", "Peter");

let bookList1 = new Booklist();

bookList1.add([book1, book2, book3, book4, book5, book6]);
```
