function fetchUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({name : "Google" , URL : "https://www.google.com/"})
            // reject({name : "Google" , URL : "https://www.google.com/"})
            // if resolve happens then try block will execute and if reject happens then catch block will execute
        }, 3000);
    })

    
}
// fetchUserData()
//     .then()
//     .catch()

async function getUserData() {
    try {
        console.log("Fetching User Data...");
        const userdata = await fetchUserData();// you can only use await keyword only in async function
        console.log("User Data : ", userdata)
        console.log("User Data Fetched successfully.");
        
    } catch (error) {
        console.error("Error in Fetching Data ", error);
    }
}
getUserData();