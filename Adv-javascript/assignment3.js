// Task 1: Create Inheritance Using Prototypes

// Create a constructor Animal with a method makeSound(). Then create a constructor Dog that inherits from Animal and adds a method bark()

function Animal() {
  
}
Animal.prototype.makeSound = function(){
    return 'Animal makes sound';
} // pehle function banao fir prototype banao
function Dog() {};

Dog.prototype = Object.create(Animal.prototype)//to inherit the properties of animal in dog 
Dog.prototype.bark = function () {
    return 'Dog Barks.';
}

Dog.prototype.constructor = Dog;// to assign the dog protoype constructor as dog
const dog = new Dog();
console.log(dog.makeSound()); // Output: Animal makes sound
console.log(dog.bark());

// Create a constructor function Shape that takes color as a parameter and has a method getColor() that returns the color.
function Shape(color) {
    this.color = color;
};
Shape.prototype.getColor = function () {
    return `${this.color}`;
}
// Create another constructor Rectangle that inherits from Shape and adds properties width and height.
// Add a method getArea() to Rectangle that returns the area of the rectangle.

function Rectangle(height, width, color) {
    Shape.call(this, color);// calling the Shape function
    this.width = width;
    this.height = height;
 };

Rectangle.prototype = Object.create(Shape.prototype);// Set up Inheritance
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.getArea = function () {
    return this.width * this.height;
}

const rect = new Rectangle(10,20,"blue");
console.log(rect.getColor());
console.log(rect.getArea());
