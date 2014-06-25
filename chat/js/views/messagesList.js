var app = app || {};

app.messageListView = Backbone.View.extend({
    el: '#subshribe',

    events:{
        'renderOneMessage':'renderOneMessage'
    },

    initialize: function (itinialMessage) {
        this.collection = new app.MessagesList(itinialMessage);
        this.listenTo(this.collection,'add', this.renderMessage);
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
    },
    renderOneMessage : function(obj){
        this.collection.add(new app.message({messageText : obj.text}))
    }
});