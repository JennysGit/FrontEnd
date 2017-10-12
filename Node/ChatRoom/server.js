var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html')

});

http.listen(3000, function() {
    console.log('listening on *: 3000');
});


var usercount = 0;

io.on('connection', function(socket) {
    usercount++;
    socket.on('message', function(msg) {
        console.log('message: ' + msg);
        io.emit('message', msg);
    });

    socket.on('disconnect', (reason) => {
        usercount--;
        console.log('left');
    });
});


io.on('close', function(socket) {
    console.log('user discount.');
})