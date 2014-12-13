/**
 * Created by steve on 12/13/14.
 */
(function($) {
    $('.submitNick').on('click', function () {
        var newNick = $('#nickname').val();
        window.globals.register(newNick);
    });
})(jQuery);
