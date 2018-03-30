var express = require('express');
var app = express();

app.get('/', function(req, res){
	res.send("hello word");
});

app.post('/', function(req, res) {
	console.log("主页 post 请求");

	res.send("hello post");
});

app.get('/del_user', function(req, res){
	console.log("delete user get");
	res.send('删除页面');
});

app.get('/list_user', function(req, res){
	console.log('/list user get');
	res.send('正则匹配');
});

var server = app.listen(3000, function(){
	var host = server.address().address;
	var port = server.address().port;

	console.log("应用实例访问地址为： http://%s:%s", host, port);
});