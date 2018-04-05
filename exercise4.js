var fs = require('fs'); // assign filesystem module
var fileDir = process.argv[2]; // assign command-line argument in variable

fs.readFile(fileDir, 'utf-8', function(err, data) {
  if (err) throw err;
  
  var result = data.toString().split('\n').length - 1;
  console.log(result);
});
