var http = require('http');
var fs = require('fs');
//var bl = require('bl');

var server = http.createServer(function (req, res) {  
  // manejar cada petición aquí. 
 var fichero = fs.createReadStream(process.argv[3]);
	 fichero.pipe(res);

/*  fichero.pipe(bl(function (err, data) { 
	  	if(err){
	  		return console.log(err.message);
	  	}else{
	  		var datos = data
	  		
	  		res.writeHead(200,
	  		 'content-length': 'datos.length',
			  'content-type': 'text/plain',
			)
	  		res.write(datos);
	  		res.end();

		}
*/	 


})
server.listen(process.argv[2],function(){

	console.log('Escuchando en el puerto: ',process.argv[2]);
	
})  
   
