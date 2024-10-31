function outer () {
    let counter = 5
    return function inner () {
      counter++
      return counter
    }
  }
  let inc = outer()
  console.log(inc())
  console.log(inc())
  console.log(inc())
  console.log(inc())
  
  // Closures in JavaScript are functions that retain access to variables from their containing scope even after the parent function has finished executing. They’re useful for maintaining private data, creating modular code, and implementing callback functions with persistent state.
  
  // What is a Closure?
  // A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). When you create a closure, you gain access to an outer function’s scope from an inner function. Closures are automatically created every time a function is defined in JavaScript.
  