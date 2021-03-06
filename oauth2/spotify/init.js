'use strict'
var spotify = require('./spotify');
var User = require('../../models/user');

module.exports = function (passport, config) {
    passport.serializeUser(function (user, done) {
        done(null, user._id);
    });

    passport.deserializeUser(function (id, done) {
        User.findById(id, function (err, user) {
            done(null, user);
        });
    });

    spotify(passport, config.spotify);
}

