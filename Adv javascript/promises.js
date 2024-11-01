function fetchData () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = true;
            if (success) {
                resolve("Data fetched successfully");
            }
            else {
                reject("Error fetching data.");
            }
        }, 3000);
    });
}
/*
A Promise is in one of these states:

# pending: initial state, neither fulfilled nor rejected.
# fulfilled: meaning that the operation was completed successfully.
# rejected: meaning that the operation failed.
*/
// let response = fetchData();
// console.log(response);

// chaining of then and catch
fetchData()
    .then((data) => {
        console.log(data);
        return data.toLowerCase();
    })// resolve
    .then((value) => {
        console.log(value);
    })
    .catch((error) => console.error(error));// reject
   