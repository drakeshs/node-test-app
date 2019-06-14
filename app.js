var express = require('express');
var app = express();

app.get('/', function(req, resp){
	var i;
	for(i = 0; i < 100; i++) {
		console.log('Example app listening on port 3000!');	
	}
	resp.send("Hello World!!");
});

app.listen(3000, function (){
	console.log('Example app listening on port 3000!');
});