// Task 1: Simulating Asynchronous Behavior

// Create a function simulateAsyncTask() that logs “Task started”, then after 2 seconds logs “Task finished”.

// Use setTimeout to simulate this behaviour.


function simulateAsyncTask() {
    console.log("Task Started");
    setTimeout(() => {
        console.log("Task finished.");
    }, 2000);
}
simulateAsyncTask();

// Task 2: Simulate Multiple Async Tasks with Different Delays

// Create a function simulateMultipleTasks() that starts three asynchronous tasks with different delays (1 second, 2 seconds, and 3 seconds).

// Each task should log "Task [n] finished" where [n] is the task number. Ensure the tasks run asynchronously

function simulateMultipleTasks(params) {
    setTimeout(() => {
        console.log("Task1 finished.")
    }, 1000);

    setTimeout(() => {
        console.log("Task2 finished.")
    }, 2000);

    setTimeout(() => {
        console.log("Task3 finished.")
    }, 3000);
}
simulateMultipleTasks();

// Task 3: Async Task with Callback Function

// Create a function fetchDataWithCallback(callback) that simulates fetching data asynchronously using setTimeout (after 2 seconds).

// Once the data is “fetched”, it should invoke the provided callback function with "Fetched data" as an argument.

function fetchDataWithCallback(callback) {
    setTimeout(() => {
        const data = 'Fetched Data.'
        callback(data);
    }, 2000);
}
console.log(fetchDataWithCallback());