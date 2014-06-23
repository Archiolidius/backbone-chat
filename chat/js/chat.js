var app = app || {};

$(function() {
    var messages = [
        { nickName: 'JavaScript', date: '20.06.2', messageText: 'dssfbjdsbfj'},
        { nickName: 'JavaScriptq', date: '20.06.2', messageText: 'dssfbjdsbfj'},
        { nickName: 'JavaScriptw', date: '20.06.2', messageText: 'dssfbjdsbfj'}
    ];
    new app.messageListView( messages );
});