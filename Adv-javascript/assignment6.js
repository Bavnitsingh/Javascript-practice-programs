// Task 1: Creating a Simple Generator

// Create a generator function numberGenerator() that yields numbers from 1 to 3.
function* numberGenerator() {
    yield 1;
    yield 2;
    yield 3;
}
let gen = numberGenerator();
// console.log(gen.next().value);//1
// console.log(gen.next().value);//2
// console.log(gen.next().value);//3
// console.log(gen.next().value);//undefined

// Task 2: Create a Custom Iterator

// Create a custom iterator called rangeIterator(start, end) that returns an object that iterates over numbers from start to end.

// Each call to .next() should return the next number in the range until it reaches end.
function* rangeIterator(start,end) {
    let current = start;
    return {
        next: function () {
            if (current <= end) {
                return { value: current++, done : false };
            }
            else {
                return { value: undefined, done: true };
            }
        }
    };
}

// for (const value of rangeIterator(1, 5)) {
//     console.log(value);  // Output: 1 2 3 4 5
// }

// Test with manual calls to .next()
// const iterator = rangeIterator(1, 3);
// console.log(iterator.next()); // Output: { value: 1, done: false }
// console.log(iterator.next()); // Output: { value: 2, done: false }
// console.log(iterator.next()); // Output: { value: 3, done: false }
// console.log(iterator.next()); // Output: { value: undefined, done: true }

// Task 3: Generator Function for Fibonacci Sequence

// Create a generator function fibonacciGenerator() that yields numbers from the Fibonacci sequence indefinitely (1, 1, 2, 3, 5, 8, etc.).

// Use the next() method to get the next Fibonacci number
function* fibonacciGenerator() {
    let a = 1, b = 1;
    yield a;
    yield b;
    while (true) {
        let next = a + b;
        yield next;
        a = b;
        b = next;
    }
}

const fibSeries =  fibonacciGenerator();// note in generator instance dont write new keyword.


// Test the generator with a for...of loop, limiting to the first 10 numbers
let count = 0;
for (const value of fibonacciGenerator()) {
    console.log(value);  // Output: Fibonacci sequence values
    count++;
    if (count >= 10) break; // Stop after 10 values to avoid infinite loop
}
// console.log(fibSeries.next().value);
// console.log(fibSeries.next().value);
// console.log(fibSeries.next().value);
// console.log(fibSeries.next().value);
// console.log(fibSeries.next().value);
// console.log(fibSeries.next().value);
// console.log(fibSeries.next().value);
// console.log(fibSeries.next().value);
// console.log(fibSeries.next().value);
// console.log(fibSeries.next().value);
// console.log(fibSeries.next().value);
// console.log(fibSeries.next().value);
// console.log(fibSeries.next().value);
// console.log(fibSeries.next().value);
// console.log(fibSeries.next().value);
// console.log(fibSeries.next().value);
// console.log(fibSeries.next().value);
// console.log(fibSeries.next().value);
// console.log(fibSeries.next().value);
// console.log(fibSeries.next().value);
// console.log(fibSeries.next().value);
// console.log(fibSeries.next().value);
// console.log(fibSeries.next().value);
// console.log(fibSeries.next().value);