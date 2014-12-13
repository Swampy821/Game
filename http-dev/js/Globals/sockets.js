/**
 * Created by steve on 12/13/14.
 */
(function() {
    function Socks() {
        this.chatServPort = 3001;
        this.gameServPort = 3002;
        this.gameSocket =  io(window.location.hostname +':' +  this.gameServPort);
        this.chatSocket = io(window.location.hostname + ':' + this.chatServPort);
    }


    window.socks = new Socks();


})();