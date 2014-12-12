/**
 * Created by steve on 12/12/14.
 */

function Socket(globals, io, socket) {
    this.socket = socket;
    this.config = globals.config;
    this.globals = globals;
    this.io = io;
    console.log(socket.id + ' instantiated');
}


Socket.prototype.getSocket = function() {
    return this.socket;
};







module.exports = Socket;