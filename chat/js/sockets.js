socket = new WebSocket("ws://localhost:8081");

//incoming message
socket.onmessage = function (event) {
    var obj = JSON.parse(event.data);
    if (obj.type === 'userMessage') {
        $('#subshribe').trigger('renderOneMessage', obj)
    } else if (obj.type === 'systemMessage') {
        $('#subshribe').trigger('renderOneSystemMessage', obj)
    }
};

//close connection
socket.onclose = function (event) {
    return event.code;
};

var SOCKETS = {
    sendMessage: function (message) {
        socket.send(message);
    },

    sendNickname: function (nickName) {
        if (nickName && (nickName !== '')) {
            socket.send('Nickname: ' + nickName)
        }
        $('#newUser').modal('hide');
        return false;
    }
}