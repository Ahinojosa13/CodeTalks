
var mysql=require('mysql'); //Connect to a MySQL Database
var connection=mysql.createConnection({  //.createConnection is a inbuilt program to create a connection Object
  host:'localhost',         //Object Contains: Host , User , Password, Database
  user:'your username',
  password:'your password',
  database:'your database name'
});
connection.connect(function(error){  //function that take a callback function as an Argument
  if(!!error){
    console.log(error); //Console Logs will throw error code if not successful
  }else{              //Else it was successful so it'll console log Connected!:)
    console.log('Connected!:)'); 
  }
}); 
module.exports = connection; // This Statement is used in order to export Connection Object so it is available for other other modules to use if need