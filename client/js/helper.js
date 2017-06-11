Template.nav.helpers({
   photo: function () {
       return Meteor.user().services.google.picture;
   },
    name: function () {
        return Meteor.user().services.google.given_name;
    }
});