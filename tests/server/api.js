'use strict'

var express = require('express');
var request = require('supertest');
var router = require('../../routes');

var app = express();

app.use(router);

module.exports = app;


