// #### Animal

// Properties:
// - `location`
// - `numberOfLegs`

// Methods

// - `eat()` - log a message saying `I live in ${location} and I can eat`
// - `changeLocation(newLocation)` - accepts location and updates the location of the animal
// - `summary()` - returns `I live in ${location} and I have ${numberOfLegs}`

let animalMethod = {
  eat() {
    console.log(`I live in ${this.location} and I can eat`);
  },
  changeLocation(newLocation) {
    this.location = newLocation;
  },
  summary() {
    returns`I live in ${this.location} and I have ${this.numberOfLegs}`;
  },
};

function animal(location, numberOfLegs) {
  let animalObj = Object.create(animalMethod);
  animalObj.location = location;
  animalObj.numberOfLegs = numberOfLegs;
  return animalObj;
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
// - `summary()` - returns `I am ${name} and I am of ${color} color. I can also bark`

let dogMethods = {
  bark() {
    alert(`I am ${this.name} and I can bark 🐶`);
  },
  changeName(newName) {
    this.name = newName;
  },
  changeColor(newColor) {
    this.color = newColor;
    return this.color;
  },
  summary() {
    return `I am ${this.name} and I am of ${this.color} color. I can also bark`;
  },
};

function createDog(name, location, numberOfLegs, color) {
  let dog = createAnimal(location, numberOfLegs);
  Object.setPrototypeOf(dog, dogMethods);
  dog.name = name;
  dog.color = color;
  return dog;
}
Object.setPrototypeOf(dogMethods, animalMethods);

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

let catMethods = {
  meow() {
    alert(`I am ${this.name} and I can do meow meow 😹`);
  },
  changeName(newName) {
    this.name = newName;
  },
  changeColorOfEyes(newColor) {
    this.colorOfEyes = newColor;
    return this.colorOfEyes;
  },
  summary() {
    return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`;
  },
};

function createCat(name, location, numberOfLegs, colorOfEyes) {
  let cat = createAnimal(location, numberOfLegs);
  Object.setPrototypeOf(cat, catMethods);
  cat.name = name;
  cat.colorOfEyes = colorOfEyes;
  return cat;
}
Object.setPrototypeOf(catMethods, animalMethods);
