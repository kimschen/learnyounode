var mymodule = require('./module-ex6');

var fileDir = process.argv[2]; // assign command-line argument in variable
var fileExt = process.argv[3]; // assign a dot(.) before the argument in variable

mymodule(fileDir, fileExt, function(err, file) {
  
  if(err)
    return console.error("error:", err);
    
  file.forEach(function(file){
		console.log(file);
	});
});