/**
 * Created by steve on 12/12/14.
 */
function RoomEvents() {}

RoomEvents.prototype.init = function(globals, io, socket) {
    this.io = io;
    this.globals = globals;
    this.socket = socket;
    this.listenForNewRoom();
};

RoomEvents.prototype.onCreateRoom = function(response) {
    if(this.globals.config.debug) {
        console.log('onCreateRoom called');
    }
    new this.globals.Room(this.globals, this.io, response.roomName);
};


RoomEvents.prototype.listenForNewRoom = function() {
    var self = this;
    console.log('listening for createRoom');
    this.socket.socket.on('createRoom', function(response) {
        self.onCreateRoom(response);
    });
};


module.exports = new RoomEvents();