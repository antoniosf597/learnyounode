var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2],function (error, files){
	files.forEach(function (file){

		var ar3 = "."+process.argv[3];
		if(ar3 == path.extname(file))
			console.log(file)
		
	});
})