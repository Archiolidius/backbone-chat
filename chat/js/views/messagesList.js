var app = app || {};

app.messageListView = Backbone.View.extend({
    el: '#subshribe',

    events: {
        'renderOneMessage': 'renderOneMessage',
        'renderOneSystemMessage': 'renderOneSystemMessage'
    },

    initialize: function (itinialMessage) {
        this.collection = new app.MessagesList(itinialMessage);
        this.listenTo(this.collection, 'add', this.renderMessage);
        this.render();
    },

    render: function () {
        var that = this;
        this.collection.each(function (item) {
            that.renderMessage(item)
        })
    },

    renderMessage: function (item) {
        var boockViev = new app.messageView({
            model: item
        });
        this.$el.append(boockViev.render().el)
    },
    renderOneMessage: function () {
        var obj = JSON.parse(event.data);
        this.collection.add(new app.message(obj));

        this.$el.perfectScrollbar('update');
        this.$el.animate({ scrollTop: this.$el[0].scrollHeight}, 500);
    },

    renderOneSystemMessage: function () {
        var obj = JSON.parse(event.data);
        var systemMessageItem = '<li>' + obj.messageText + '</li>';
        this.$el.append(systemMessageItem);
        $('#chat').trigger('refreshOnlineUserCount', obj)
    }
});