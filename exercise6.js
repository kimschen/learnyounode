var mymodule = require('./module-ex6');

var fileDir = process.argv[2];
var fileExt = process.argv[3];

mymodule(fileDir, fileExt, function(err, file) {
  
  if(err)
    return console.error("error:", err);
    
  file.forEach(function(file){
		console.log(file);
	});
});