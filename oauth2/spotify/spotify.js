'use strict'

var SpotifyStrategy = require('passport-spotify').Strategy;
var User = require('../../models/user');

module.exports = function (passport, config) {
    passport.use('spotify', new SpotifyStrategy({
            clientID: config.client_id,
            clientSecret: config.client_secret,
            callbackURL: config.redirect_uri
        },
        function (accessToken, refreshToken, profile, done) {
            process.nextTick(function () {
                User.findOne({'spotify.id': profile.id}, function (err, user) {
                    if (err) {
                        return done(err);
                    }

                    if (user) {
                        var options = {multi: false};
                        User.update({'spotify.id': user.spotify.id}, {'spotify.access_token': accessToken}, options, function (err) {
                            if (err) {
                                return done(err, null);
                            }
                            user.spotify.access_token = accessToken;
                            return done(null, user);
                        });
                    }
                    else {
                        var newUser = new User();
                        newUser.spotify.id = profile.id;
                        newUser.spotify.email = profile.emails[0].value;
                        newUser.spotify.access_token = accessToken;
                        newUser.spotify.username = profile.username;

                        newUser.save(function (err) {
                            if (err) {
                                throw err;
                            }

                            return done(null, newUser);
                        });
                    }
                });
            });
        }));
};
