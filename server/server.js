var http = require('http');
var WebSocketServer = new require('ws');

var clients = {};

var webSocketServer = new WebSocketServer.Server({port: 8081});
webSocketServer.on('connection', function (ws) {
    var nickName;
    ws.on('message', function (message) {
        var date = (function () {
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
        })();
        if (message.split(':')[0] === 'Nickname') {
            nickName = message.split(':')[1];
            clients[nickName] = ws;
            console.log('New user: ' + nickName);
            var clients_len = (function () {
                var i = 0;
                for (var key in clients) {
                    i++
                }
                return i;
            })();
            console.log(clients_len);
            var data = {
                messageText: 'User <strong>' + nickName + '</strong> has been connected to this chat',
                type: 'systemMessage',
                nickName: null,
                clientsCount: clients_len,
                date: date
            };
            for (var key in clients) {
                clients[key].send(JSON.stringify(data))
            }
        } else {
            console.log('new message: ' + message);
            for (var key in clients) {
                var data = {
                    messageText: message,
                    type: 'userMessage',
                    nickName: nickName,
                    date: date
                };
                //ws.send(JSON.stringify(data))
                clients[key].send(JSON.stringify(data));
            }
        }
    });

    ws.on('close', function () {
        console.log('Connection is close' + nickName);
        delete clients[nickName];
        var clients_len = (function () {
            var i = 0;
            for (var key in clients) {
                i++
            }
            return i;
        })();
        var data = {
            messageText: 'User <strong>' + nickName + '</strong> leave from this chat',
            type: 'systemMessage',
            clientsCount: clients_len
        }
        for (var key in clients) {
            clients[key].send(JSON.stringify(data))
        }
    })
});

console.log('Server run in port 8081')