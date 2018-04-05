var fs = require('fs'); // assign filesystem module
var fileDir = process.argv[2]; // assign command-line argument in variable
var result = fs.readFileSync(fileDir); // readFileSync function to read fileDir, assign return value to a variable

result = result.toString().split('\n'); // convert to string and split the new lines to a new array

console.log(result.length - 1); 
// substract one from the result's length as the test file doesn't have new line at the end of the last line
