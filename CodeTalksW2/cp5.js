// What is a async/await? Why is async/await useful?  
// Async/await is a feature in JavaScript that allows you to write asynchronous code in a synchronous style. It simplifies 
// handling asynchronous operations by using the "async" keyword to declare asynchronous functions and the "await" keyword 
// to pause execution until Promises are resolved. 

// What are pro/cons to using async/await?  
// Pros of using async/await:
// Readability: Async/await allows for writing asynchronous code in a more sequential and synchronous style, making it easier 
// to read and understand.

// Error handling: The use of try/catch blocks with async/await simplifies error handling and allows for structured exception 
// handling, similar to synchronous code.

// Control flow: Async/await provides a more natural control flow, making it easier to reason about and debug asynchronous operations.

// Compatibility: Async/await works well with Promises, which are widely used in modern JavaScript code, allowing for seamless integration 
// with existing Promise-based APIs.

// Cons of using async/await:

// Compatibility with older environments: Async/await requires a modern JavaScript environment, so it may not be compatible with older browsers 
// or Node.js versions without additional transpilation or polyfills.

// Potential for blocking: If not used carefully, blocking operations within an async function can cause the code to freeze and prevent other 
// tasks from executing concurrently.

// Learning curve: While async/await simplifies asynchronous code, understanding the underlying concepts and effectively using async/await 
// may require some learning and familiarity with Promises and asynchronous programming in JavaScript.

// Please code some examples of async/await to show to the class. 
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function example() {
    try {
      console.log('Start');
      await delay(2000);
      console.log('Delay complete');
    } catch (error) {
      console.log('Error:', error);
    }
  }
  
  example();
  