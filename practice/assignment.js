function Animal() {
}

Animal.prototype.speak = function() {
  return 'Animal speaking';
};

function Dog() {
}

Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.bark = function() {
  return 'Woof!';
};

Dog.prototype.constructor = Dog;
// console.log(Object.getPrototypeOf(Dog,Animal));



// Task 1: Create a Functional Constructor

// Create a functional constructor Person that takes name and age as parameters. Add a method greet() to the constructor that returns "Hello, my name is [name]".



// Task 2: Handle Errors

// Modify the Person constructor to throw an error if the age is not a positive number.
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function () {
        return `Hello ${this.name} , You are ${this.age} years old.`
    };
    if (age < 0) {
        throw new Error("Age cant be Negative");
    
    }
   
}
let Bavnit = new Person("Bavnit", 10);
console.log(Bavnit.greet())