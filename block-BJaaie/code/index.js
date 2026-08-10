// ===================================================================================
//                                      Pseudoclassical Pattern
// ===================================================================================

// #### Animal

// Properties:
// - `location`
// - `numberOfLegs`

// Methods
// - `eat()` - log a message saying `I live in ${location} and I can eat`
// - `changeLocation(newLocation)` - accepts location and updates the location of the animal
// - `summary()` - returns `I live in ${location} and I have ${numberOfLegs}`
/* A comment. 
========================================================================*/
function Animal(location, numberOfLegs) {
  this.location = location;
  this.legs = numberOfLegs;
}
Animal.prototype = {
  eat() {
    console.log(`I live in ${this.location} and I can eat`);
  },
  changeLocation(newLocation) {
    return (this.location = newLocation);
  },
  summary() {
    return `I live in ${this.location} and I have ${this.numberOfLegs}`;
  },
};
// #### Dog
// It will have all the properties and methods of the Animal. These are the extra properties and methods these dogs will have.

// Properties:
// - `name`
// - `color`

// Methods:
// - `bark()` - alerts a message saying `I am ${name} and I can bark 🐶`
// - `changeName(newName)` - accepts the name property and updates the name of the dog
// - `changeColor(newColor)` - accepts the new color and updates the color of the dog
// - `summary()` - returns `I am ${name} and I am of ${color} color. I can also bark`
// ========================================================================
function Dog(location, numberOfLegs, name, color) {
  Animal.apply(this, [location, numberOfLegs]);
  this.name = name;
  this.color = color;
}
Dog.prototype = {
  bark() {
    alert(`I am ${this.name} and I can bark 🐶`);
  },
  changeName(newName) {
    this.name = newName;
  },
  changeColor(newColor) {
    this.colorOfEye = newColor;
  },
  summary() {
    return `I am ${this.name} and I am of ${this.color} color. I can also bark`;
  },
};
Object.setPrototypeOf(Dog.prototype, Animal.prototype);

// #### Cat
// It will have all the properties and methods of the Animal. These are the extra properties and methods these dogs will have.

// Properties:
// - `name`
// - `colorOfEyes`

// Methods:
// - `meow()` - alerts a message saying `I am ${name} and I can do mewo meow 😹`
// - `changeName(newName)` - accepts the name property and updates the name of the dog
// - `changeColorOfEyes(newColor)` - accepts the new color and updates the color of the dog
// - `summary()` - returns `I am ${name} and the color of my eyes are ${colorOfEyes}. I can also do meow meow`
// ========================================================================
function Cat(location, numberOfLegs, name, colorOfEye) {
  Animal.apply(this, [location, numberOfLegs]);
  this.name = name;
  this.colorOfEye = colorOfEye;
}
Cat.prototype = {
  meow() {
    alert(`I am ${this.name} and I can do mewo meow 😹`);
  },
  changeName(newName) {
    this.name = newName;
  },
  changeColor(newColor) {
    this.color = newColor;
  },
  summary() {
    return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`;
  },
};
Object.setPrototypeOf(Cat.prototype, Animal.prototype);

// ===================================================================================
//                                      Class Pattern
// ===================================================================================

// #### Animal

// Properties:
// - `location`
// - `numberOfLegs`

// Methods
// - `eat()` - log a message saying `I live in ${location} and I can eat`
// - `changeLocation(newLocation)` - accepts location and updates the location of the animal
// - `summary()` - returns `I live in ${location} and I have ${numberOfLegs}`
/* A comment. 
========================================================================*/
class Animal {
  constructor(location, numberOfLegs) {
    this.location = location;
    this.numberOfLegs = numberOfLegs;
  }
  eat() {
    console.log(`I live in ${this.location} and I can eat`);
  }
  changeLocation(newLocation) {
    return (this.location = newLocation);
  }
  summary() {
    return `I live in ${this.location} and I have ${this.numberOfLegs}`;
  }
}

// #### Dog
// It will have all the properties and methods of the Animal. These are the extra properties and methods these dogs will have.

// Properties:
// - `name`
// - `color`

// Methods:
// - `bark()` - alerts a message saying `I am ${name} and I can bark 🐶`
// - `changeName(newName)` - accepts the name property and updates the name of the dog
// - `changeColor(newColor)` - accepts the new color and updates the color of the dog
// - `summary()` - returns `I am ${name} and I am of ${color} color. I can also
class Dog extends Animal {
  constructor(location, numberOfLegs, name, color) {
    super(location, numberOfLegs);
    this.name = name;
    this.color = color;
  }
  bark() {
    alert(`I am ${this.name} and I can bark 🐶`);
  }
  changeName(newName) {
    this.name = newName;
  }
  changeColor(newColor) {
    this.colorOfEye = newColor;
  }
  summary() {
    return `I am ${this.name} and I am of ${this.color} color. I can also bark`;
  }
}

// #### Cat
// It will have all the properties and methods of the Animal. These are the extra properties and methods these dogs will have.

// Properties:
// - `name`
// - `colorOfEyes`

// Methods:
// - `meow()` - alerts a message saying `I am ${name} and I can do mewo meow 😹`
// - `changeName(newName)` - accepts the name property and updates the name of the dog
// - `changeColorOfEyes(newColor)` - accepts the new color and updates the color of the dog
// - `summary()` - returns `I am ${name} and the color of my eyes are ${colorOfEyes}. I can also do meow meow`
// ========================================================================
class Cat extends Animal {
  constructor(location, numberOfLegs, name, colorOfEye) {
    super(location, numberOfLegs);
    this.name = name;
    this.colorOfEye = colorOfEye;
  }
  meow() {
    alert(`I am ${this.name} and I can do mewo meow 😹`);
  }
  changeName(newName) {
    this.name = newName;
  }
  changeColor(newColor) {
    this.color = newColor;
  }
  summary() {
    return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`;
  }
}
