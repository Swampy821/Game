/**
 * Created by steve on 12/12/14.
 */

function Connect() {}

Connect.prototype.init = function(globals, io, connectionCallback) {
    this.io = io;
    this.config = globals.config;
    this.globals = globals;
    this.listenConnection(connectionCallback);
};

Connect.prototype.onConnect = function(io, socket, connectionCallback) {
    var mySocket = new this.globals.Sock(this.config, io, socket);
    if(this.config.debug) {
        console.log(socket.id + ' connected successfully');
    }
    io.emit('connected', socket.id);
    connectionCallback(mySocket);

};

Connect.prototype.listenConnection = function(connectionCallback) {
    var self = this;
    this.io.on('connection', function(socket) {
         self.onConnect(self.io, socket, connectionCallback);
    });
};





module.exports = new Connect();