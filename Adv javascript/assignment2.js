// Instructions
// Task 1: Creating a Counter Using Closures

// Create a function createCounter() that returns a function which increments and returns a counter value each time it is called.
// function createCounter() {
//     let val = 0;
//     return function () {
//         return ++val;
//     }
// }

// console.log(createCounter());



// Task 2: Rate Limiter Function

// Create a function rateLimiter(fn, limit) that returns a new function.
// The returned function allows calling fn only once within a limit time in milliseconds.
//If it is called again before the limit is reached, it should return "Rate limit exceeded".
// function rateLimiter(fn,limit) {
//     let lastCalled = 0;
//     return function (...args) {// 3 dots means n no. of arguments we dont know how many
//         const now = Date.now();
//         if (now - lastCalled < limit) {
//             return `Rate Limit Exceeded.`
//         }
//         else {
//             lastCalled = now;
//             return fn (...args);
//         }
//     }
// }
// rateLimiter();


// Task 3: Memoization Function

// Write a function memoize(fn) that returns a memoized version of fn.
// The memoized function should cache the results of function calls,
//and return the cached result if the same inputs are provided again.

function memoize(fn) {
    return function (...args) {
        const key = JSON.stringify(args);
        if (cache[key]) {
            return cache[key];
        }
        else {
            const result = fn(...args);
            cache[key] = result;
            return result;
            }
    }
   
}
console.log(memoize());