var express = require('express');
var app = express();
const port = 4000;
app.get('/', function(req, resp){
	var i;
	const loop_times = 10;
	for(i = 0; i < loop_times; i++) {
		console.log('App running');	
	}
	resp.send("Hello World!!");
});

app.listen(port, function (){
	console.log(`Example app listening on port ${port}`);
});