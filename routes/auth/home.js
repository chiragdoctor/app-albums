var express = require('express');
var home = express.Router();

home.get('/', function (req, res) {
    res.render('index.html', {user: req.user});
});

home.get('/login', function (req, res) {
    res.render('login.html', {user: req.user});
});

home.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/');
});

module.exports = home;
