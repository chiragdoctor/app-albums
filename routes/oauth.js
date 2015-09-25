'use strict'

var express = require('express');
var oauth = express.Router();
var passport = require('passport');

oauth.get('/oauth/spotify', passport.authenticate('spotify', {
        scope: ['user-read-email', 'user-read-private'],
        showDialog: true
    }),
    function (req, res) {
    });

oauth.get('/oauth/callback/',
    passport.authenticate('spotify', {failureRedirect: '/login'}),
    function (req, res) {
        res.redirect('/');
    });

module.exports = oauth;
