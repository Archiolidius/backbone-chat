socket = new WebSocket("ws://localhost:8081");

//incoming message
socket.onmessage = function (event) {
    var obj = JSON.parse(event.data);
    if(obj.type !== 'systemMessage' ){
    $('#subshribe').trigger('renderOneMessage',obj)}
    //return obj;
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
    },

    getUserName: function () {
        $('#newUser').modal('show');
    },

    getDate: function () {
        var date = new Date();
        var curTime = {};
        curTime.hours = date.getHours();
        curTime.minutes = date.getMinutes();
        curTime.second = date.getSeconds();
        var dateString = (function () {
            var str = '';
            for (var key in curTime) {
                str += curTime[key] += ':';
            }
            return str.substring(0, str.length - 1);
        })();
        return dateString;
    }
}