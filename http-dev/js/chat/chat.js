/**
 * Created by steve on 12/13/14.
 */
(function($) {
    function Chat() {
        this.bind();
        this.listenForUpdate();
    }

     Chat.prototype.bind = function() {
         var self = this;
         $('.say').on('keydown', function(e) {
            if(e.keyCode===13) {
                self.say();
            }
        });
     };

    Chat.prototype.listenForUpdate = function() {
        window.socks.chatSocket.on('sayFromServer', function(say) {
           var current = $('.chat').val();
            current = say + current;
            $('.chat').val(current);
        });
    };

    Chat.prototype.say = function() {
        var say = $('.say');
        var text = say.val();
        var sayToServer = window.globals.me.nickName + ': ' + text + '\n';
        window.socks.chatSocket.emit('sayToServer', sayToServer);
        say.val('');
    };

    window.chat = new Chat();

})(jQuery)