 var bl = require('bl');
 var http = require('http');
 var respuestas = Array();
 var contador = 0;
function escribirRespuestas(){
	for(i=0; i < 3 ;i++){
		console.log(respuestas[i]);
	}
	
}
function peticion(index){
	http.get(process.argv[ 2 + index], function(res) {
	  	res.pipe(bl(function (err, data) { 
	  		if(err){
	  			return console.log(err.message);
	  		}else{
	  			var datos = data.toString();
	  			respuestas[index] = datos;
	  			contador ++;
	  			if(contador === 3){
	  				escribirRespuestas();
	  			}
	  		}
	 })) 

	}).on('error', function(e) {
	  console.log("Got error: " + e.message);
	});
}
for (var i = 0;i < 3; i++) {
	peticion(i);
}
