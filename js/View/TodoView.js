var app = app || {}
app.TodoView = Backbone.View.extend({
	tagName:'li',
	itemTemplate:_.template($('#item-template').html()),

	render:function(){
		this.$el.html(this.itemTemplate(this.model.attributes));
		return this;
	}
})