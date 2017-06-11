Template.nav.events({
  'click .login': function(){
    Meteor.loginWithGoogle({
      requestPermissions: [
        'https://www.googleapis.com/auth/user.birthday.read',
        'https://www.googleapis.com/auth/userinfo.profile',
          'https://www.googleapis.com/auth/plus.me'
      ]
    })
  },
    'click .logout': function () {
        Meteor.logout();
    }
});