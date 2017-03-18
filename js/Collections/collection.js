var app = app || {};
app.TodoColltection = Backbone.Collection.extend({
	model:app.Todo,
	localStorage : new Backbone.LocalStorage('todo')
})

app.todoList = new app.TodoColltection();