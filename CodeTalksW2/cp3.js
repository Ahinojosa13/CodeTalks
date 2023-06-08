// The “this” keyword works differently in arrow functions vs regularly declared functions.  
// Regular function this refers to the obj object and Arrow Function this refers to the global object or window in the browser.

// Explain how the “this” keyword works differently in arrow functions vs normal functions.  
// Main difference is that the "this" keyword in regular functions refers to the object that is executing the function, while in arrow functions, "this" is determined by the surrounding scope and remains the same regardless of how or where the function is called.

// Write some code that shows that you understand the difference between how the “this” keyword is used.  
// regularly declared functions
    const obj = {
        name: 'John',
        regularFunc: function() {
         console.log(this.name);
    },
    
// Arrow function    
    arrowFunc: () => {
      console.log(this.name);
     }
    };
  
  obj.regularFunc();  // Output: John (this refers to the obj object)
  obj.arrowFunc();    // Output: undefined (this refers to the global object or window in the browser)
  