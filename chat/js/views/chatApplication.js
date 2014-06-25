app = app || {};

app.chatApplicationView = Backbone.View.extend({
    el: '#chat',

    events:{
        'click #sendMessage' : 'sendMessage',
        'click .sendNickname' : 'sendNickname',
        'renderOneMessage' : 'renderOneMessage'
    },
    initialize : function(){
        $('#newUser').modal('show');
    },

    sendMessage : function(e){
        e.preventDefault();
        var textMessage = this.$el.find('#MessageForSend').val();
        SOCKETS.sendMessage(textMessage);
    },

    sendNickname : function(){
        var nickname = this.$el.find('#sendNickname').val();
        SOCKETS.sendNickname(nickname);
    }
});