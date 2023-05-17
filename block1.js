// Coding Problem 3 :      Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most 
// secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead,
//  we mask it.     Your task is to write a function maskify, which changes all but the last four characters into '#'.

// Solution 1:  Using For Loop 
function censor(cc) {
    var censorString = " ";             
    for(var i = 0; i < cc.length; i++) {
        if(i < cc.length - 4){
            censorString= censorString + "#";
        } else {
            censorString = censorString + cc.charAt(i);
        };
    }
    return censorString;
}
console.log(censor("SSN 123 45 3221"));

// 1. The censor function begins by declaring a variable called censorString and initializing it with a space character (" "). This variable will be 
// used to store the censored string.

// 2. Next, there is a for loop that iterates over each character in the input string cc. The loop is controlled by the variable i, which starts at 
// 0 and goes up to one less than the length of the cc string.

// 3. Inside the loop, there is an if statement that checks whether i is less than the length of the input string cc minus 4. This condition is used
// to determine if the current character should be censored.

// 4. If i is less than cc.length - 4, it means the current character is not part of the last four characters in the string. In this case, the 
// censorString is appended with a "#" character using the += operator to represent censoring.

// 5. If the condition in the if statement is not met, it means the current character is one of the last four characters in the string. In this case, 
// the censorString is appended with the actual character from the input string cc using the charAt(i) function.

// 6. After the loop finishes, the censorString is returned as the result of the censor function.

// 7. Finally, the console.log statement is used to output the result of calling the censor function with the argument "SSN 123 45 3221". The result 
// will be the censored string where all but the last four characters are replaced with "#" symbols.

// Solution 2:  Slice() Method
function maskify(cc){
    return cc.slice(0,-4).replace(/./g, "#") + cc.slice(-4);
}

console.log(maskify("Anthony AKA Tony"));

// 1. function uses the "slice" method to extract all characters in the credit card number except the last four. The "slice" method takes two 
// arguments: the starting index (0 in this case) and the ending index (which is -4, meaning all characters up to the fourth from the end).

// 2. "replace" method to replace all characters in the string with "#" symbols. The "/./g" regular expression pattern matches all characters 
// in the string.

// 3. The third line of the function concatenates the last four characters of the original string to the masked version in the previous step.