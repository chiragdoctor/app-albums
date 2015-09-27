'use strict'

var mongoose = require('mongoose');

module.exports = mongoose.model('User',{
    spotify: {
        id: String,
        access_token: String,
        refresh_token: String,
        email: String,
        username: String
    }
});
