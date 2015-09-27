var express = require('express');
var home = express.Router();
var cool = require('cool-ascii-faces');


home.get('/', function (req, res) {
    res.render('index.html.ejs');
});

home.get('/login', function (req, res) {
    console.log('in login route');
    res.status(200).json({user: req.user});
});

home.get('/logout', function (req, res) {
    req.logout();
    res.send(200);
});

home.get('/cool', function(request, response) {
    response.send(cool());
});


module.exports = home;
