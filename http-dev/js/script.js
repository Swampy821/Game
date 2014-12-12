

var chat = new Chat();


chat.init();


$(function() {
    $(document).keydown(function (e) {
        chat.createRoom('My Room');
    });
});