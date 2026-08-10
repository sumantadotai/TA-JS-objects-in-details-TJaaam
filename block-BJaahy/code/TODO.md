# More about class

- Create a class named `Square` which accepts one parameter `side` and will set two property `width` and `height` to the value of `side`.

- Add a method name `description` that will alert a message saying `The square is ${width} x ${height}`

- Create a method inside the class named `calcArea` that will return the area of the square.

- Create a `area` getter method using which we can get the area of the square.

- Create a `area` setter method that will accept the area of the square. Based on the value of area it will set the value of `width` and `height`.

- Create a static method named `isEqual` which accepts two `square` object with `width` and `height` property. If the area of both square is same it will return `true` or `false`.

- Create two instance of the `Square` class

- Check the `area` getter method on both square. Check the `area` property on one square more than 4 times.

- Check the `isEqual` method and pass the two instance you created above.

```js
class Square {
  constructor(side) {
    this._width = side;
    this._height = side;
    this.numberOfTimes = 0;
  }
  description() {
    alert(`The square is ${this._width} x ${this._height}`);
  }
  calcArea() {
    return this._width * this._height;
  }
  get area() {
    this.numberOfTimes++;
    if (this.numberOfTimes >= 4) {
      alert(`Upper limit reached`);
    } else return this._width * this._height;
  }
  set area(value) {
    this._width = Math.sqrt(value);
    this._height = Math.sqrt(value);
  }
  static isEqual(square1, square2) {
    return square1.area === square2.area;
  }
}

let sq1 = new Square(10);
sq1.area;
sq1.calcArea();
let sq2 = new Square(25);
sq2.area;
sq2.calcArea();
Square.isEqual(sq1, sq2); // False
```

## User Class

- Create a `User` class that accepts `firstName` and `lastName` property

- Create a getter method named `fullName` that will return the full name of the person.

- Create a `fullName` setter method that will accept full name parameter of the person. It will update the `firstName` and `lastName` based on the input. Say if the user passed `Arya Stark` it will update the `firstName` to `Arya` and `lastName` to `Stark`. It will also change one condition if the length of the name passed is less than 5 characters it will alert a message saying `Full name should be more than 5 characters`

- Create a method named `nameContains` which will accept string and will return `true` or `false` based on if the name of the user contains the text that passed by user.

- Create two instance of the `User` class

- Check by using the `fullName` setter method with name bigger than 5 characters.

- Check by using the `fullName` setter method with name less than 5 characters.

- Check the `fullName` using getter

- Check the `nameContains` method

```js
class User {
  constructor(firstName, lastName) {
    this._first = firstName;
    this._last = lastName;
  }
  get fullName() {
    this._fullName = `${this._first} ${this._last}`;
    return this._fullName;
  }
  set fullName(name) {
    if (name.length < 5) {
      alert(`Full name should be more than 5 characters`);
    } else {
      this.first = name.split(" ")[0];
      this.last = name.split(" ")[1];
    }
  }
  nameContains(name) {
    return this.fullName.includes(name);
  }
}

let user1 = new User("Arya", "Stark");
user1.fullName;
user1.nameContains("a");
let user2 = new User("John", "Snow");
user2.fullName;
user2.nameContains("z");
```
