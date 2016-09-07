
//搭建Web服务器
//http://127.0.0.1:1337/

const http = require('http');
const hostname = '127.0.0.1';
const port = 1337;

//req请求，get还是post
//res 返回
http.createServer((req, res) =>{
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end("Hello Node\n");
}).listen(port, hostname, () => {
	console.log("Server running at http://${hostname}:${port}/");
});

//监听的