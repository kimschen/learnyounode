var fs = require('fs'); // assign filesystem module
var path = require('path'); // assign path module

var fileDir = process.argv[2]; // assign command-line argument in variable
var fileExt = "." + process.argv[3]; // assign a dot(.) before the argument in variable

fs.readdir(fileDir, 'utf-8', function(err, file) {
  
  // loop all files and log the files with specific file extension
  for(i = 0; i < file.length; i++) { 
    if (path.extname(file[i]) === fileExt) {
      console.log(file[i]);
    }
  }
});