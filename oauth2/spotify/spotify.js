'use strict'

var SpotifyStrategy = require('passport-spotify').Strategy;

module.exports = function (passport, config){

// Use the SpotifyStrategy within Passport.
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, an accessToken, refreshToken, and spotify
//   profile), and invoke a callback with a user object.
    passport.use('spotify', new SpotifyStrategy({
            clientID: config.client_id,
            clientSecret: config.client_secret,
            callbackURL: config.redirect_uri
        },
        function(accessToken, refreshToken, profile, done) {
            process.nextTick(function () {
                // To keep the example simple, the user's spotify profile is returned to
                // represent the logged-in user. In a typical application, you would want
                // to associate the spotify account with a user record in your database,
                // and return that user instead.
                console.log("profile of user>>>>>>>>>>>>", profile);
                return done(null, profile);
            });
        }));
}
