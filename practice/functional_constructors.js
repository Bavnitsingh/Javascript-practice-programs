let computer = {
    cpu: 12,
  };
  let hp = {
    cpu: 10,
    screen: "Amoled",
  };
  let lenovo = {
    screen: "HD",
    __proto__: hp,
  };
  let BSChardware = {
    __proto__: hp,
  };
  // console.log(`BSChardware`,BSChardware.__proto__)
  
  let genericCar = {
    tyres: 4,
  };
  let Tesla = {
    driver: "AI",
  };
  Object.setPrototypeOf(Tesla, genericCar);
  // console.log(`Tesla`,Object.getPrototypeOf(Tesla))
  
  function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  function Car(make, model) {
    this.make = make;
    this.model = model;
  }
  let mycar = new Car("Tata", "Nexon");
  // console.log(mycar);
  
  function tea(type) {
    this.type = type;
    this.describe = function () {
      return `This is a cup of ${this.type} .`;
    };
  }
  let mytea = new tea("Chai");
  // console.log(mytea.describe());
  
  // why prototype is used in js :
  // To define properties and methods that can be shared by all instances of an object
  
  // Below is the example of prototype chain
  function Animal(species) {
      this.species = species;
      if (!new.target) {
          throw new Error("Animal should be called with new keyword");
          
      }
  }
  Animal.prototype.sound = function (sound) {
      return `${this.species} makes sound ${sound}.`
  };
  let dog = new Animal("Dog")
  console.log(dog.sound("Bark"));
  let cat = new Animal("Cat")
  console.log(cat.sound("Meow"));
   