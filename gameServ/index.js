var config = require('./../config.json');
var Hapi = require('hapi');

var server = new Hapi.Server();
server.connection({ port: config.gameServPort });

server.route({
    method:'GET',
    path:'/',
    handler: function(request,reply) {
        reply('Game Server Running');
    }
});

server.start(function () {
    console.log('Game Server running at:', server.info.uri);
});