var express = require('express');
var index = express.Router();

index.get('/', function (req, res, next) {
    res.render('index.html', {user: req.user});
});

index.get('/login', function (req, res, next) {
    res.render('login.html', {user: req.user});
});

index.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
});

module.exports = index;
