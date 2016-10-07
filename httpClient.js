
var http = require('http');

http.get(process.argv[2], function(res) {
  	res.setEncoding('utf8');
	res.on("data", function (data) { 
		console.log(data);
	})
	res.on("error", function (data) { 
		console.log('Error:' + error.messagele);
	})


}).on('error', function(e) {
  console.log("Got error: " + e.message);
});