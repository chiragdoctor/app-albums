'use strict'

var express = require('express');
var oauth = express.Router();
var passport = require('passport');
var request = require('request');

oauth.get('/spotify', passport.authenticate('spotify', {
        scope: ['user-read-email', 'user-read-private'],
        showDialog: true
    }),
    function (req, res) {
    });

oauth.get('/callback',
    passport.authenticate('spotify', {failureRedirect: '/login'}),
    function (req, res) {
        res.redirect('/');
    });

oauth.get('/refresh_token', function(req, res) {

    // requesting access token from refresh token
    var refresh_token = req.query.refresh_token;
    var client_id = req.query.client_id;
    var client_secret =  req.query.client_secret;
    var authOptions = {
        url: 'https://accounts.spotify.com/api/token',
        headers: { 'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64')) },
        form: {
            grant_type: 'refresh_token',
            refresh_token: refresh_token
        },
        json: true
    };

    request.post(authOptions, function(error, response, body) {
        if (!error && response.statusCode === 200) {
            var access_token = body.access_token;
            res.send({
                'access_token': access_token
            });
        }
    });
});

module.exports = oauth;
