/**
 * Created by steve on 12/12/14.
 */
function Room(globals, io, roomName) {
    this.io = io;
    this.id = new Date().getTime();
    this.globals = globals;
    this.info = {
        roomName: roomName
    };
    this.createRoom();
}


Room.prototype.createRoom = function() {
    this.io.emit('newRoom', this.id);
    this.globals.rooms[this.id] = this;
    if(this.globals.config.debug) {
        console.log('Room ' + this.info.roomName + ' Created');
    }
};






module.exports = Room;


