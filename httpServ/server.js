var config = require('./../config.json');
var Hapi = require('hapi');


var server = new Hapi.Server();
server.connection({ port: config.httpServPort });

server.route({
    method:'GET',
    path:'/',
    handler: function(request,reply) {
            reply.file(__dirname + '/public/index.html');
    }
});

server.route({
    method:'GET',
    path:'/assets/js/{js}',
    handler: function(request, reply) {
        reply.file(__dirname + '/public/js/' + request.params.js + '.js');
    }
});

server.route({
    method:'GET',
    path:'/assets/css/{css}',
    handler: function(request, reply) {
        reply.file(__dirname + '/public/css/' + request.params.css + '.css');
    }
});

server.start(function () {
    console.log('http Server running at:', server.info.uri);
});