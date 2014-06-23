socket = new WebSocket("ws://localhost:8081");

//incoming message
socket.onmessage = function (event) {
    var obj = JSON.parse(event.data);
    return obj;
};

//close connection
socket.onclose = function (event) {
    return event.code;
};
var SOCKETS = {
    sendMessage: function (message) {
        socket.send(message);
    },

}