app = app || {};

app.chatApplicationView = Backbone.View.extend({
    el: '#chat',

    events: {
        'click #sendMessage': 'sendMessage',
        'click .sendNickname': 'sendNickname',
        'submit #nicknameForm': 'sendNickname',
        'submit #messageForm': 'sendMessage',
        'keydown #MessageForSend': 'keyAction',
        'refreshOnlineUserCount': 'refreshOnlineUserCount'


    },
    initialize: function () {
        this.$el.find('#newUser').modal('show');
        this.$el.find('#subshribe').perfectScrollbar();
    },

    sendMessage: function (e) {
        //e.preventDefault();
        var textMessage = this.$el.find('#MessageForSend').val();
        SOCKETS.sendMessage(textMessage);
    },

    sendNickname: function (e) {
        e.preventDefault();
        var nickname = this.$el.find('#sendNickname').val();
        SOCKETS.sendNickname(nickname);
    },

    keyAction: function (e) {
        var that = this;
        if ((e.keyCode == 13) && (this.$el.find('#MessageForSend').focus())) {
            if (e.shiftKey === true) {
                //if Shift+Enter = new line
            }
            else {
                that.sendMessage();
                that.$el.find('#MessageForSend').val('');
            }
            return false;
        }
    },

    refreshOnlineUserCount: function () {
        var clientsCount = JSON.parse(event.data).clientsCount;
        this.$el.find('.clientsCount span').text(clientsCount);
    }
});