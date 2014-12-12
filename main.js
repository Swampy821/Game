var cp = require('child_process');

var chatServer = cp.fork(__dirname + '/chatServ/index.js');

var gameServer = cp.fork(__dirname + '/gameServ/index.js');

var httpServer = cp.fork(__dirname + '/http/server.js');