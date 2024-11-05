function Person(name){
    this.name = name;
}

Person.prototype.greet = function() {
    return `My name is ${this.name}`;
}

let Bavnit = new Person("Bavnit");
console.log(Bavnit.greet());