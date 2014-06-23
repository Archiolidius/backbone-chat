app = app || {};

app.chatApplication = Backbone.View.extend({
    el: '#chat',

    initialize: function(){

    },

    events:{
        'click button.sendMessage':'sendMessage'
    },

    sendMessage : function(){
        var textMessage = $el.find('#MessageForSend').val();
    }


});