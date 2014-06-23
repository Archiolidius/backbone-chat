var app = app || {};

app.massage = Backbone.Model.extend({
    defaults: {
        nickName: null,
        date: null,
        messageText: null
    }
});

app.Message = app.messageView;