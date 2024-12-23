// Task 1: Bind the Correct Context

// Create an object person with properties name and a method introduce(). Use the bind() method to ensure the method works correctly when passed to another function.

let person = {
    name: "Bavnit Singh",
    introduce() {
        return `Hi I am Bavnit Singh.`
    }
};
const boundIntroduce = person.introduce.bind(person);
console.log(boundIntroduce());

// Task 2: Using call() to Invoke a Function with Different Contexts

// Write a function introduce() that uses the this keyword to introduce a person by name. Then, invoke introduce() using call() to introduce different people with the same function.
function introduce() {
    // this.name = name;
    return `Hello , Myself ${this.name}`;
}
const person1 = { name: "Alice" };
const person2 = { name: "Bob" };

console.log(introduce.call(person1));
console.log(introduce.call(person2));


// Task 3: Using apply() to Pass Arguments with Context

// Create a function sum() that accepts two numbers and uses this to access a multiplier value.
//Then, invoke sum() with different contexts using apply(), passing the numbers as an array.
function sum(a, b) {
    return (a + b) * this.multiplier;
}
const context1 = { multiplier: 4 };
const context2 = { multiplier: 5 };

console.log(sum.apply(context1, [1, 3]));
console.log(sum.apply(context2, [1, 3]));