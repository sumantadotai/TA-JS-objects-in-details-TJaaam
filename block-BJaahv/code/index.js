// Create User (class/function) with the following properties.
// - [ ] properties (data):
//   - [ ] name
//   - [ ] id
//   - [ ] noOfProjects
// - [ ] methods:
//   - [ ] getProjects -> return number of project
//   - [ ] changeName -> accepts one parameter (newName)returns old user name
//   - [ ] incrementProject -> returns updated number of projects
//   - [ ] decrementProject -> returns updated number of projects

// =================================================================
// [ ] Using function to create object
// =================================================================
function User(name, id, noOfProjects) {
  let obj = {};
  obj.name = name;
  obj.id = id;
  obj.noOfProjects = noOfProjects;
  obj.getProjects = function () {
    return noOfProjects;
  };
  obj.changeName = function (newName) {
    this.newName = newName;
    return this.name;
  };
  obj.incrementProject = function (value = 1) {
    this.noOfProjects = this.noOfProjects + value;
    return this.noOfProjects;
  };
  obj.decrementProject = function (value = 1) {
    this.noOfProjects = this.noOfProjects - value;
    return this.noOfProjects;
  };
  return obj;
}
// Test for Using function
let user1 = User("Arya", 35, 67);
console.log(user1.changeName("Sumanta"));
console.log(user1.incrementProject());
console.log(user1.decrementProject());
let user2 = User("John", 2, 34);
console.log(user1.changeName("Sum"));
console.log(user1.incrementProject());
console.log(user1.decrementProject());
// =================================================================
// [ ] Using Object.create (prototypal pattern)
// =================================================================
let userMethods = {
  getProjects() {
    return noOfProjects;
  },
  changeName(newName) {
    this.newName = newName;
    return this.name;
  },
  incrementProject(value = 1) {
    this.noOfProjects = this.noOfProjects + value;
    return this.noOfProjects;
  },
  decrementProject(value = 1) {
    this.noOfProjects = this.noOfProjects - value;
    return this.noOfProjects;
  },
};

function User(name, id, noOfProjects) {
  let obj = Object.create(userMethods);
  obj.name = name;
  obj.id = id;
  obj.noOfProjects = noOfProjects;
  return obj;
}
// Test for prototypal
let user3 = User("Arya", 35, 67);
console.log(user3.changeName("Sumanta"));
console.log(user3.incrementProject());
console.log(user3.decrementProject());
let user4 = User("John", 2, 34);
console.log(user4.changeName("Sum"));
console.log(user4.incrementProject());
console.log(user4.decrementProject());
// =================================================================
// [ ] Using Pseudoclassical Way
// =================================================================
function User(name, id, noOfProjects) {
  this.name = name;
  this.id = id;
  this.noOfProjects = noOfProjects;
}
User.prototype = {
  getProjects() {
    return noOfProjects;
  },
  changeName(newName) {
    this.newName = newName;
    return this.name;
  },
  incrementProject(value = 1) {
    this.noOfProjects = this.noOfProjects + value;
    return this.noOfProjects;
  },
  decrementProject(value = 1) {
    this.noOfProjects = this.noOfProjects - value;
    return this.noOfProjects;
  },
};
// Test for Pseudoclassical
let user5 = new User("Arya", 35, 67);
console.log(user5.changeName("Sumanta"));
console.log(user5.incrementProject());
console.log(user5.decrementProject());
let user6 = new User("John", 2, 34);
console.log(user6.changeName("Sum"));
console.log(user6.incrementProject());
console.log(user6.decrementProject());
// =================================================================
// [ ] Using Class
// =================================================================
class User {
  constructor(name, id, noOfProjects) {
    this.name = name;
    this.id = id;
    this.noOfProjects = noOfProjects;
  }
  getProjects() {
    return noOfProjects;
  }
  changeName(newName) {
    this.newName = newName;
    return this.name;
  }
  incrementProject(value = 1) {
    this.noOfProjects = this.noOfProjects + value;
    return this.noOfProjects;
  }
  decrementProject(value = 1) {
    this.noOfProjects = this.noOfProjects - value;
    return this.noOfProjects;
  }
}
// Test for Class
let user7 = new User("Arya", 35, 67);
console.log(user7.changeName("Sumanta"));
console.log(user7.incrementProject());
console.log(user7.decrementProject());
let user8 = new User("John", 2, 34);
console.log(user8.changeName("Sum"));
console.log(user8.incrementProject());
console.log(user8.decrementProject());
