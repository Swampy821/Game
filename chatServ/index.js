var Hapi = require('hapi');

var server = new Hapi.Server();
server.connection({ port: 3333 });

server.route({
    method:'GET',
    path:'/',
    handler: function(request,reply) {
        reply('Chat Server Running');
    }
});

server.start(function () {
    console.log('Chat Server running at:', server.info.uri);
});