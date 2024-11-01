const person = {
    name: "Bavnit Singh",
    greet: function () {
        console.log(`Hello , Myself ${this.name} , nice to meet you!!`);
    },
};

// person.greet();

const greetFunction = person.greet;
greetFunction();// Hello , Myself undefined , nice to meet you!!

const boundFunction = person.greet.bind({ name: "Harman Singh" });
boundFunction();//Hello , Myself Harman Singh , nice to meet you!!