const createError = require('http-errors');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const { signupValidation, loginValidation } = require('./validation.js');
// Line 1-6 Are all require modules in order to run code properly
const app = express();
// App is to using Express API
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
   extended: true
}));
app.use(cors());
// Line 10-15 all use middleware functions perform tasks such as parsing incoming JSON data, handling URL-encoded data, and enabling CORS
app.get('/', (req, res) => {
   res.send('Node js file upload rest apis');
});
// GET is a route server responds with the string 'Node js file upload rest apis'.
app.post('/register', signupValidation, (req, res, next) => {
  // your registration code 
});
app.post('/login', loginValidation, (req, res, next) => {
  // your login code
});
// Line 21 and 24 using POST Route along with the request, response, and next middleware parameters
// Handling Errors
app.use((err, req, res, next) => {
   // console.log(err);
   err.statusCode = err.statusCode || 500;
   err.message = err.message || "Internal Server Error";
   res.status(err.statusCode).json({
     message: err.message,
   });
});
// Line 29-35 During the request-response cycle it sets the status code and message of the error, and sends a JSON response with the error information
app.listen(3000,() => console.log('Server is running on port 3000'));
// Console log that the server is running on port 3000
