ServiceConfiguration.configurations.remove({
    service: "google"
});
ServiceConfiguration.configurations.insert({
    service: "google",
    clientId: "818917671060-ld7mluukmc6ib3jcbtstb0s0tvchoks5.apps.googleusercontent.com",
    loginStyle: "popup",
    secret: "BSogt3iR4kpY-XzFT9PnBIBD"
});

// Extended Fields
Accounts.onCreateUser(function(options, user) {
    user.profile = options.profile || {};
    user.profile.year = options.year;
    return user;
});