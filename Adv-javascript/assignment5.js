// Task 1: Async-Await with Promise.all

// Create two functions fetchUser() and fetchPosts(), both returning promises that resolve in 1 second.

// Use async-await and Promise.all to fetch both simultaneously and log the results as part of fetchAllData()
// function fetchUser() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Data fetched.");
//     }, 1000);
//   });
// }
// function fetchPosts() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Posts fetched.");
//     }, 1000);
//   });
// }
// async function fetchAllData(params) {
//   const [user, post] = await Promise.all([fetchUser(), fetchPosts()]);
//   console.log(user);
//   console.log(post);
// }
// // fetchAllData();

// Task 2: Error Handling in Async/Await with Promise.all

// Write two functions fetchSuccess() and fetchFailure(), where fetchSuccess() returns a promise that resolves successfully after 1 second, and fetchFailure() returns a promise that rejects with an error after 1 second.

// Create a function handlePromises() that calls both functions using Promise.all and handles success and failure cases.
function fetchSuccess() {
  setTimeout(() => {
    return new Promise((resolve) => {
      return resolve("Successfully Fetched data.");
    });
  }, 1000);
}
function fetchFailure() {
  setTimeout(() => {
    return new Promise((reject) => {
      return reject("Error Fetching data.");
    });
  }, 1000);
}
async function handlePromises() {
  let error = "Error in fetching data";
  try {
    const [success, failure] = await Promise.all([
      fetchSuccess(),
      fetchFailure(),
    ]);
    console.log(success);
  } catch (error) {
    console.log(error);
  }
}
handlePromises();
// Task 3: Timeout with Async/Await and Promise.race

// Create a function fetchWithTimeout(promise, timeout) that takes a promise and a timeout value in milliseconds.
//Use Promise.race() to return the result of the promise if it resolves within the timeout, otherwise return "Timeout exceeded".
function fetchWithTimeout(promise, timeout) {
    const timeOutPromise = new Promise((_, reject) => {
      setTimeout(() => {
        reject("Timeout exceeded");
      }, timeout);
    });
  
    return Promise.race([promise, timeOutPromise]);
  }
  
  function fetchData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Data fetched.");
      }, 3000); // This promise will resolve after 3 seconds
    });
  }
  
  // Testing with a timeout less than 3000ms
  fetchWithTimeout(fetchData(), 2000)
    .then((result) => console.log(result)) // Won't run because of timeout
    .catch((error) => console.log(error)); // Output: Timeout exceeded
  
  // Testing with a timeout greater than 3000ms
  fetchWithTimeout(fetchData(), 4000)
    .then((result) => console.log(result)) // Output: Data fetched.
    .catch((error) => console.log(error));
  
// fetchWithTimeout(promise, 2000);