const getTodos = () => {
    const request = new XMLHttpRequest();
  //  Create a request for XMLHttpRequest();
   request.addEventListener('readystatechange', ()=>{
  //  With the addEventListener will be trigger if readyState 
    if(request.readyState === 4 && request.status ===200){
// Rquest is 4 and 200 meaning it successful
      console.log(request.responseText)
       }
      else if (request.readyState === 4){
        // Rquest is 4 but not 200 meaning it failed
        console.log('could not fetch the data');
      }
   });
   
   
   request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
  //  Opens request to server fetching data by using GET and the URL
   request.send();
  //  Sends a request to server
   }
   
   getTodos();
  //  Calling on the Function
   getTodos();
  //  Calls on it again showing that the can take multiple request 
   