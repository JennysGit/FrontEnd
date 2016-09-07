var express = require('express');

var app = express();

app.use(express.static('public'));

app.get('/index.html', function(req, res){
	res.sendFile(__dirname + "/" + "index.html");
});

app.get('/process_get', function(req, res){
	var respone = {
		first_name: req.query.first_name,
		last_name: req.query.last_name
	};
	console.log(respone);
	res.end(JSON.stringify(respone));
});

var server = app.listen(8081, function(){
	var host = server.address().address;
	var port = server.address().port;

	console.log("application started. address is: http://%s:%s", host, port);
})