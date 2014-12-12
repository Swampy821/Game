var config = require('./../config.json');
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var Sock = require('./lib/modules/socket.js');

var Room = require('./lib/modules/room.js');

var globals = {
    "Sock":Sock,
    "Room":Room,
    "config":config,
    "rooms":{}
};


var connectionEvents = require('./lib/events/connectionEvents.js');
var roomEvents = require('./lib/events/roomEvents.js');

connectionEvents.init(globals, io, function(socket) {
    roomEvents.init(globals, io, socket);



});




http.listen(globals.config.chatServPort, function(){
    console.log('Chat Server running on port ' + config.chatServPort);
});


