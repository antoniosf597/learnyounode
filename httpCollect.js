 var bl = require('bl');
 var http = require('http');

http.get(process.argv[2], function(res) {
  	res.pipe(bl(function (err, data) { 
  		if(err){
  			return console.log(err.message);
  		}else{
  			
  			console.log(data.toString().length);
  			console.log(data.toString());
  		}
 })) 



}).on('error', function(e) {
  console.log("Got error: " + e.message);
});