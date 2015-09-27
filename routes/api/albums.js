'use strict'

var express = require('express');
var albums = express.Router();
var request = require('request');
var ensureAuthenticated = require('../../middlewares/ensureAuthenticated');
var _ = require('lodash');


albums.get('/albums', ensureAuthenticated, function (req, res, done) {
    //q=album:Iron%20Maiden&type=album
    var options = {
        url: 'https://api.spotify.com/v1/search',
        qs: {q: 'album:Iron Maiden', type: "album"},
        headers: { 'Authorization': 'Bearer ' + req.user.spotify.access_token },
        json: true
    };

    request.get(options, function(err, response, body) {
        if(err){
            return done(err);
        }
        var albums = [ ];
        _.forEach(body.albums.items, function(n){
            albums.push({images : n.images[2], name: n.name});
        });
        var uniqueAlbums = _.uniq(albums, function(album){
           return album.name;
        });
        res.json({albums: uniqueAlbums});
    });
});

module.exports = albums;