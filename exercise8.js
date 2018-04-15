var http = require('http');
var bl = require('bl'); // BufferList
var url = process.argv[2].toString();

http.get(url, (res) => {
  res.pipe(bl(function(err, data) {
    if (err)
      return console.error(err);
    
    data = data.toString();
    console.log(data.length);
    console.log(data);
  }));
});
