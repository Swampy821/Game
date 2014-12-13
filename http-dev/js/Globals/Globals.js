/**
 * Created by steve on 12/13/14.
 */
(function($) {

    function Globals() {
        this.listenForUserListChanges();
        this.listenForMe();
        this.me = {};
    }

    Globals.prototype.register = function(nickName) {
        window.socks.gameSocket.emit('newNick', nickName);
        window.socks.gameSocket.emit('getUsers');
    };

    Globals.prototype.updateUserList = function(obj) {
        var keys = Object.keys(obj);
        var newList = '';
        for(var i=0; i<keys.length; i++) {
            newList = newList + '<li class="' + (obj[keys[i]].id === this.me.id ? 'red' : '') + '">' + obj[keys[i]].nickName + ' - ' + obj[keys[i]].health + 'hp </li>';
        }
        $('.userList').html(newList);
    };


    Globals.prototype.listenForUserListChanges = function() {

        var self = this;
        window.socks.gameSocket.on('userList', function(response) {
            self.updateUserList(response);
        });
    };

    Globals.prototype.listenForMe = function() {
        var self = this;
        window.socks.gameSocket.on('meUser', function(response) {
            self.me = response;
        });
    };

    window.globals = new Globals();

})(jQuery);