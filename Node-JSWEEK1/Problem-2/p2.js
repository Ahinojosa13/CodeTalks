const {readFile, writeFile} = require('fs');
// imports two function that will allow the txt document to be read and write files
console.log('start');
readFile('./content/first.txt','utf8', (err, result)=> {
    // read first.txt file by following the  ./ pathway  
   if (err) {
       console.log(err);
       return 
   }
//    If err is received it'll console log and return ERR
   const first = result;
//    Depending if it succesful or there was a error would be the result
   console.log(result);
   readFile('./content/second.txt','utf8', (err, result)=> {
// read second.txt file by following the  ./ pathway 
       if (err) {
           console.log(err);
           return 
       }
       const second = result;
    //    Assign new value to second based on function return
       console.log(result);
       
       writeFile('./content/result-async.txt', `Here is the result : ${first}, ${second}`,(err, result) => {
// three arguments (the path to the file to be written)  (the content to be written (a string interpolation with the first and second variables)) 
//  (a callback function that will be executed when the file write operation completes)
           if (err) {
               console.log(err);
               return 
           }
           console.log('done with the task');    
       }
       );
   })
});
console.log('starting next task');
