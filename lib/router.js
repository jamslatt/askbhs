Router.configure({
    layoutTemplate: 'base'
});

// URL Routes
Router.route('/', function() {
  this.render('home');
  Router.onAfterAction(function() {
    document.title = "askBHS"
  });
});
