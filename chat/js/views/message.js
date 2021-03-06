var app = app || {};

app.messageView = Backbone.View.extend({
    tagName: 'li',
    className: 'subshribeItem',

    template: _.template($('#messageTemplate').html()),

    render: function () {
        this.$el.html(this.template(this.model.toJSON()));

        return this;
    }
});
