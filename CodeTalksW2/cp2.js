// What is a callback? 
// A callback is a function that is passed as an argument to another function and is invoked or called at a later point 
// in time. Callbacks are a fundamental part of asynchronous programming in Node.js

// What is callback hell? 
// Callback hell describe a situation in asynchronous programming where multiple callbacks are nested within each other, 
// resulting in deeply nested and unreadable code.

// Why does callback hell occur and why should we avoid callback hell?  
// Callback hell occurs in asynchronous programming when multiple callbacks are nested within each other, leading to deeply 
// nested and unreadable code. It should be avoided because it makes the code difficult to read, maintain, and debug. It hampers 
// code reusability, error handling, scalability, and composability. Using alternative approaches like Promises, async/await, or 
// control flow libraries can help mitigate callback hell and improve code quality.

// Please code an example of callback hell to show to the class. Make sure to go into detail as you explain your code to the class.

// Callback
function fetchData(callback) {
    // Simulating an asynchronous operation
    setTimeout(() => {
      const data = 'Some data';
      // Calling the callback function with the data
      callback(null, data);
    }, 2000);
  }
  
  // Using the callback function
  fetchData((error, data) => {
    if (error) {
      console.error('Error:', error);
    } else {
      console.log('Data:', data);
    }
  });
  
// Callback hell using the previous code but with more nested callbacks
function fetchData(callback) {
    setTimeout(() => {
      const data = 'Some data';
      callback(null, data);
    }, 2000);
  }
  
  fetchData((error, data) => {
    if (error) {
      console.error('Error:', error);
    } else {
      console.log('Data:', data);
  
      fetchData((error2, data2) => {
        if (error2) {
          console.error('Error:', error2);
        } else {
          console.log('Data 2:', data2);
  
          fetchData((error3, data3) => {
            if (error3) {
              console.error('Error:', error3);
            } else {
              console.log('Data 3:', data3);
  
              fetchData((error4, data4) => {
                if (error4) {
                  console.error('Error:', error4);
                } else {
                  console.log('Data 4:', data4);
                }
              });
            }
          });
        }
      });
    }
  });
  
         