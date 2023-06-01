const {readFileSync, writeFileSync} = require('fs'); 
// imports two function that will allow the txt document to be read and write files

const fs = require('fs');
// fs is File Selector

const first = readFileSync('./first.txt','utf8')
const second = readFileSync('./second.txt','utf8')
// Line 7 & 8 i create a const variable that will used the readFlieSync grabbing the first and second txt document and with the utf8 format 
console.log(first, second);

writeFileSync('./result-sync.txt', `Here is the result : ${first}, ${second}`);

writeFileSync('./result-sync.txt', `Here is the result : ${first}, ${second}`,{flag: 'a'});
// {flag: 'a'} provides an option for a third argument and is append instead of overwriting its contents 