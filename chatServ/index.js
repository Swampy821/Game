var config = require('./../config.json');
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

io.on('connection', function(socket) {
   socket.on('sayToServer', function(say) {
       io.emit('sayFromServer', say);
   });
});


http.listen(config.chatServPort, function(){
    console.log('Chat Server running on port ' + config.chatServPort);
});


