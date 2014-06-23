var app = app || {};

/*TEMP*/
//TODO: make message model in message model file
app.massage = Backbone.Model.extend({
    defaults: {
        nickName: 'no name',
        date: 'dkl',
        messageText: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem '
    }
});
/*TEMP*/

app.MessagesList = Backbone.Collection.extend({
   model: app.massage
});