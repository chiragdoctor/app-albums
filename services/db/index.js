'use strict'

var mongoose = require('mongoose');
var config = require('config');

exports.connect = function () {
    var url = process.env.MONGOLAB_URI || config.get('mongo.url');
    mongoose.connect(url);
}