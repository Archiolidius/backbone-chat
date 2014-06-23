var app = app || {};

app.messageListView = Backbone.View.extend({
    el: '#subshribe',

    initialize: function (itinialMessage) {
        this.collection = new app.MessagesList(itinialMessage);
        this.render();
    },

    render: function() {
        var that = this;
        this.collection.each(function(item){
            that.renderMessage(item)
        })
    },

    renderMessage: function(item){
        var boockViev = new app.messageView({
            model:item
        });
        this.$el.append(boockViev.render().el)
    }
});