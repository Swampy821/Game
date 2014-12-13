var config = require('./../config.json');
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var Events = require('./modules/events.js');
var globals = require('./globals/globals.js');

globals.setConfig(config);

io.on('connection', function(socket) {
    if(config.debug) {
        console.log(socket.id + ' connected to gameServ');
    }
    new Events(io, socket, globals);
});


http.listen(config.gameServPort, function(){
    console.log('Game Server running on port ' + config.gameServPort);
});


