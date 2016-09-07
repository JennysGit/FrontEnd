var express = require('express');

var app = express();

//设置静态文件
app.use(express.static('public'));

app.get('/', function(req, res){
	res.send('Hello world');
});

app.post('/', function(req, res){
	console.log("post method");
	res.send("Hello Post");
});


app.delete('/del_user', function(req, res){
	console.log("/del_user delete");
	res.send("delete page");
});

app.get('/list_user', function(req, res){
	console.log("/list_user get");
	res.send("user list page");
})

app.get('/ab*cd', function(req, res){
	console.log("/ab*cs method");
	res.send("Reg exp");
});

var server = app.listen(8081, function(){
	var host = server.address().address;

	var port = server.address().port;
	console.log("已访问，地址为：http://%s:%s",host, port);
});