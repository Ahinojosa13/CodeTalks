const { check } = require('express-validator');
// Using express-validatorto destructing how to function check is used to it set rule for the requested Data
exports.signupValidation = [
   check('name', 'Name is requied').not().isEmpty(),
   check('email', 'Please include a valid email').isEmail().normalizeEmail({ gmail_remove_dots: true }),
   check('password', 'Password must be 6 or more characters').isLength({ min: 6 })
]
// Line 3-7 goes through the array and take information thru the Check Route to verify sign up is to all requirements
exports.loginValidation = [
    check('email', 'Please include a valid email').isEmail().normalizeEmail({ gmail_remove_dots: true }),
    check('password', 'Password must be 6 or more characters').isLength({ min: 6 })
]
// Line 9-12 Make sure that the login input thru the Check Route to verify the login is correct  