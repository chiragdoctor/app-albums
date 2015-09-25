'use strict'

var SpotifyStrategy = require('passport-spotify').Strategy;

module.exports = function (passport, config){
    passport.use('spotify', new SpotifyStrategy({
            clientID: config.client_id,
            clientSecret: config.client_secret,
            callbackURL: config.redirect_uri
        },
        function(accessToken, refreshToken, profile, done) {
            process.nextTick(function () {
                //TODO: Save the user profile with access and refresh token to get albums.
                return done(null, profile);
            });
        }));
}
