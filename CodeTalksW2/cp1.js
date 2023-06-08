// What is a promise? 

// Promises in Node.js provide a convenient and standardized way to handle asynchronous operations and their results, making it easier to write and 
// maintain asynchronous code.

// What are promises used for?  

// Promises can be used with any asynchronous operation in Node.js, such as reading from a file, making HTTP requests, interacting with a database, 
// or any other task that involves callbacks or asynchronous behavior

// What are pro/cons to using a promise?  

// Pros: 
// Readability by offering a more structured and readable way to handle asynchronous code compared to callback functions
// Error Handling by providing a built-in error handling mechanism

// Cons:
// Lack of Native Cancellation meaning once a promise is created and initiated, it will continue to execute until it resolves or rejects.
// Promise Hell (Anti-pattern) caused by improper use of promises this occurs when promises are unnecessarily nested, resulting in long promise chains
// that are difficult to read and maintain.

// Example Code of promises to show how it works:

function fetchData(){                   // Function that return Promise to fetch data
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            const success = true;
            if(success){
                const data = { message: 'Fetch is Successful'};
                resolve(data); //Resolve the Promise with the fetch data
            } else {
                const error = new Error('Failed Try Again');
                reject(error);
            }     
        }, 2000); //Create a 2 second delay 
    });
}
// Creating a promise
fetchData()
    .then((data)=>{
        console.log(data);  //Handle Data that fetched successful
    })
    .catch((error)=>{
        console.error(error);  //Throw error if failed fetched
    })