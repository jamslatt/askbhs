Template.nav.helpers({
   photo: function () {
       return Meteor.user().services.google.picture;
   }
});