app = app || {};

app.chatApplicationView = Backbone.View.extend({
    el: '#chat',

    events: {
        'click #sendMessage': 'sendMessage',
        'submit #messageForm': 'sendMessage',
        'click .sendNickname': 'sendNickname',
        'submit #nicknameForm': 'sendNickname',
        'keydown #MessageForSend': 'keyAction',
        'refreshOnlineUserCount': 'refreshOnlineUserCount'


    },
    initialize: function () {
        this.$el.find('#newUser').modal('show');
        this.$el.find('#subshribe').perfectScrollbar();
    },

    sendMessage: function (e) {
        e.preventDefault();
        var textMessage = this.$el.find('#MessageForSend').val();
        if(textMessage !== '') {
            SOCKETS.sendMessage(textMessage);
        }
        this.$el.find('#MessageForSend').val('');
        return false;
    },

    sendNickname: function (e) {
        e.preventDefault();
        var nickname = this.$el.find('#sendNickname').val();
        if(nickname !== '') {
            SOCKETS.sendNickname(nickname);
        }
    },

    keyAction: function (e) {
        var that = this;
        if ((e.keyCode == 13) && (this.$el.find('#MessageForSend').focus())) {
            if (e.shiftKey === true) {
                //if Shift+Enter = new line
            }
            else {
                that.sendMessage(e);
            }
            return false;
        }
    },

    refreshOnlineUserCount: function () {
        var clientsCount = JSON.parse(event.data).clientsCount;
        this.$el.find('.clientsCount span').text(clientsCount);
    }
});