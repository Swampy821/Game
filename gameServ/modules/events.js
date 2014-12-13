/**
 * Created by steve on 12/13/14.
 */
var User = require('./users.js');
function Events(io, socket, globals) {
    this.io = io;
    this.socket = socket;
    this.globals = globals;

    this.listenForNewUsers();
    this.listenForUserCall();
    this.listenForDisconnect();
}

Events.prototype.updateUserList = function() {
    this.io.emit('userList', this.globals.getUsers());
};

Events.prototype.alertThisUser = function(me) {
    this.socket.emit('meUser', me)
};

Events.prototype.newUser = function(nick) {
    if(this.globals.config.debug) {
        console.log('Adding user ' + nick);
    }
    var me = new User(this.socket.id, nick);
    this.globals.addUser(me);
    this.updateUserList();
    this.alertThisUser(me);
};
Events.prototype.removeUser = function(id) {

    if(this.globals.users[id]!== undefined) {
        if(this.globals.config.debug) {
            console.log('Removing user ' + this.globals.users[id].nickName);
        }
        delete this.globals.users[id];
        this.updateUserList();
    }
};


Events.prototype.listenForNewUsers = function() {
    var self = this;
    this.socket.on('newNick', function(nick) {
        self.newUser(nick);
    });
};
Events.prototype.listenForUserCall = function() {
    var self = this;
    this.socket.on('getUsers', function(request) {
            self.socket.emit('userList', self.globals.getUsers(request));
    });
};

Events.prototype.listenForDisconnect = function() {
    var self = this;
    this.socket.on('disconnect', function(request) {
        self.removeUser(self.socket.id);
        self.updateUserList();
    });
};



module.exports = Events;