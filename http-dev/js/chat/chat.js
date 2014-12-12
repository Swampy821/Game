/**
 * Created by steve on 12/12/14.
 */
(function($) {
    function Chat() {
        this.chatServPort = 3001; /* THIS NEEDS TO BE REDONE TO BE CENTRALIZED */
    }

    Chat.prototype.init = function() {
        this.socket = io(window.location.hostname +':' +  this.chatServPort);

        //Start Listeners
        this.listenConnect();
        this.listenConnectFail();
    };
    //Call Backs.
    Chat.prototype.onConnected = function(response) {
        console.log(response);
    };
    Chat.prototype.onConnectFail = function() {
        Console.log('Failed to connect');
    };
    Chat.prototype.onNewRoom = function(response) {
        console.log('New room created with the id ' + response);
    };

    //Event Listening
    Chat.prototype.listenConnect = function() {
        var self = this;
        this.socket.on('connected', function(response) {
            self.onConnected(response);
        });
    };
    Chat.prototype.listenConnectFail = function() {
        var self = this;
        this.socket.on('connect_failed', function(){
            self.onConnectFail();
        });
    };
    Chat.prototype.listenForRooms = function() {
        var self = this;
        this.socket.on('newRoom', function(response) {
            self.onNewRoom(response);
        });
    };



    Chat.prototype.createRoom = function(roomName) {
        console.log('startCreateRoom');
        this.socket.emit('createRoom', {roomName:roomName});
    };

    window.Chat = Chat;

})(jQuery);