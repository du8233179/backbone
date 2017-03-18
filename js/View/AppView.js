var app = app || {}
app.AppView = Backbone.View.extend({
	el:'#todoapp',
	events:{
		'keypress #new-todo':'createOnEnter'
	}, 
	initialize:function(){
		this.listenTo(app.todoList,'add',this.addOne);
		app.todoList.fetch();
	},
	addOne:function(todo){
		var todoView = new app.TodoView({model:todo});
		$('#todo-list').append(todoView.render().el)
	},
	createOnEnter:function(event){
		console.log(event.which);
		if (event.which !== 13 || this.$('#new-todo').val().trim() === '') {
			return;
		}
		app.todoList.create({
			title:this.$('#new-todo').val().trim(),
			completed:false
		});
		this.$('#new-todo').val('')
	}
})