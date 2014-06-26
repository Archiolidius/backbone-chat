var app = app || {};

app.message = Backbone.Model.extend({
    defaults: {
        nickName: 'No name',
        date: '06.06.06',
        messageText: 'default text'
    }
});
