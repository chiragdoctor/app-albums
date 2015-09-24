'use strict'
var spotify = require('./spotify');

module.exports = function (passport, config) {
    passport.serializeUser(function (user, done) {
        done(null, user);
    });

    passport.deserializeUser(function (obj, done) {
        done(null, obj);
    });

    spotify(passport, config.spotify);
}

