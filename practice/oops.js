// let car = {
//     make: "Toyota",
//     model: "Cambry",
//     year: 2019,
//     engine: "turbo engine",
//     start: function () {
//         return `${this.make} ${this.model} is made in ${this.year}.`
//     }
// };
// console.log(car.start());
// note in this constructor function first letter must be capital in function-name.
function Person(name, age) {
    (this.name = name), (this.age = age);
  }
  
  // let Bavnit = new Person("Bavnit", 20);
  // console.log(Bavnit.name);
  
  // Prototype chain
  function Animal(type) {
    this.type = type;
  }
  Animal.prototype.speak = function () {
    return `${this.type} can speak .`;
  };
  
  let Dog = new Animal("Dog");
  // console.log(Dog.speak());
  
  Array.prototype.Bavnit = function () {
    return `custom method ${this}`;
  };
  
  let myarray = [1, 2, 3];
  // console.log(myarray.Bavnit());
  
  // In class , Functions are reffered as Methods and we dont have to write function keyword before it
  class Vehicle {
    constructor(made, model) {
      (this.made = made), (this.model = model);
    }
    start() {
      return `${this.model} is model made by ${this.made} is starting`;
    }
  }
  class Car extends Vehicle {
    drive() {
      return `${this.made} is very famous.`;
    }
  }
  let mycar = new Vehicle("Tata", "Nexon");
  // console.log(mycar.drive());bcoz Vehicle dont inherit the methods of Car ; but converse is true
  // console.log(mycar.start());
  
  // Encapsulation start
  // The ability to hide internal details and show only necessary parts of an object
  
  
  class BankAccount {
    #balance = 0; // it will not be accessible outside of this class
    deposit(amount) {
      this.#balance += amount;
      return this.#balance;
    }
    getBalance() {
      return `$ ${this.#balance}`;
    }
  }
  let account = new BankAccount();
  // console.log(account.getBalance());
  // Encapsulation finish
  
  // Abstraction(hides the complex implementation details)
  class CoffeeMachine {
    start() {
      // call a db
      //calculations
      return `Coffee Machine is Starting...`;
    }
    BrewCoffee() {
      // Complex calculations
      return `Brewing the Coffee.`;
    }
    PressStartButton() {
      let messOne = this.start();
      let messtwo = this.BrewCoffee();
      return `${messOne} \n ${messtwo}`;
    }
  }
  let myCoffee = new CoffeeMachine();
  // console.log(myCoffee.start());
  // console.log(myCoffee.BrewCoffee());
  // console.log(myCoffee.PressStartButton())
  
  //Abstraction ends
  
  // Polymorphism :
  // The ability of different objects to respond to the same function or method call in different ways
  
  class Bird {
    constructor(birdSpecies) {
      this.birdSpecies = birdSpecies;
    }
    fly() {
      return ` ${this.birdSpecies} flying...`;
    }
  }
  class Penguin {
    fly() {
      return `Penguins dont fly.`;
    }
  }
  let crow = new Bird("Crow");
  let penguin = new Penguin();
  // console.log(crow.fly());
  // console.log(penguin.fly());
  
  //Static keyword
  // Static Methods are only be called by its class itself
  class Calculator {
    static add(a, b) {
      return a + b;
    }
  }
  // let miniCalc = new Calculator()
  // console.log(miniCalc.add(3,4));
  // console.log(Calculator.add(1000000000 , 1000000000000000));
  
  // Getters and Setters
  //Getters are used to fetch data, and setters are used to modify data, providing a way to control access to object properties
  
  class Employee {
    #salary;
    constructor(name, salary) {
      if (salary < 0) {
        console.error("Invalid Salary");
      }
      this.name = name;
      // this._salary = salary;
      this.#salary = salary;
    }
    get salary() {
      return `You are not supposed to see the salary`;
    }
    set salary(value) {
      if (value < 0) {
        throw new Error("Invalid Salary");
      }
      this._salary = value;
    }
  }
  let emp = new Employee("Alice", -100000);
  console.log(emp._salary);
  emp.salary = -22;
  