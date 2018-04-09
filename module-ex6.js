var fs = require('fs'); // assign filesystem module
var path = require('path'); // assign path module

module.exports = function(fileDir, fileExt, callback) {
  
  fileExt = `.${fileExt}`;
  fs.readdir(fileDir, 'utf-8', function(err, file) {
  
    if(err) 
      return callback(err);
    
    file = file.filter(function(extension) {
      return path.extname(extension) === fileExt;
    });
    
    callback(null, file);
    
  });
};