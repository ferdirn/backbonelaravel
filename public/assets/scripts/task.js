(function(){
  window.App = {
    Models: {},
    Views: {},
    Collections: {}
  };

  App.Models.Task = Backbone.Model.extend({
    defaults: {
      title: '',
      completed: 0
    },
    urlRoot: 'tasks'
  });

  App.Views.Task = Backbone.View.extend({
    tagName: 'li',
    render: function() {
      this.$el.html( this.model.get('title') );
      return this;
    }
  });

  App.Collections.Tasks = Backbone.Collection.extend({
    model: App.Models.Task,
    url: 'tasks'
  });

  App.Views.Tasks = Backbone.View.extend({
    tagName: 'ul',
    initialize: function() {
      this.collection.on('add', this.addOne, this);
      this.collection.on('change', this.render, this);
    },
    render: function() {
      console.log('Views.Tasks render');
      this.$el.empty();
      this.collection.each(this.addOne, this);
      return this;
    },
    addOne: function(task) {
      console.log('Views.Tasks addOne');
      var taskView = new App.Views.Task({model: task});
      this.$el.append( taskView.render().el );
    }
  });

  App.Views.AddTask = Backbone.View.extend({
    el: '#addTaskForm',
    events: {
      'submit': 'submitTask'
    },
    submitTask: function(e) {
      e.preventDefault();
      var newTaskTitle = $(e.currentTarget).find('#newTaskTitle').val();
      var newTask = this.collection.create({title: newTaskTitle});
      $('#newTaskTitle').val('');
    }
  });

  // Implementation

  var tasksCollection = new App.Collections.Tasks;
  tasksCollection.fetch();

  var addTaskView = new App.Views.AddTask({collection: tasksCollection});
  var tasksView = new App.Views.Tasks({collection: tasksCollection});

  $('.tasks').html(tasksView.el);
})();