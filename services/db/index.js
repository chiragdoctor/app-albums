'use strict'

var mongoose = require('mongoose');
var config = require('config');

exports.connect = function () {
    mongoose.connect(config.get('mongo.url'));
}