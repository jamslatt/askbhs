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

// Display all the created tags, their color, and description.
Router.route('/tags', function() {
    this.render('tags');
});

// Terms of Service and Privacy Policy
Router.route('/tos', function () {
    this.render('tos');
});
