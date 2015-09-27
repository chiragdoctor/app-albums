var express = require('express');
var home = express.Router();

home.get('/login', function (req, res) {
    console.log('in login route');
    res.status(200).json({user: req.user});
});

home.get('/logout', function (req, res) {
    req.logout();
    res.send(200);
});

module.exports = home;
