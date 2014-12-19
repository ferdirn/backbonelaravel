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
      this.$el.append( this.model.get('title') );
      return this;
    }
  });

  App.Collections.Tasks = Backbone.Collection.extend({
    model: App.Models.Task
  });

  App.Views.Tasks = Backbone.View.extend({
    tagName: 'ul',
    render: function() {
      this.collection.each(this.addOne, this);
    },
    addOne: function(task) {
      var taskView = new App.Views.Task( {model: task });
      this.$el.append( taskview.render().el );
    }
  });

})();