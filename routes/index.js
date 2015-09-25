'use strict'

var router = require('express').Router();
var bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: false}));

router.use('/', require('../routes/auth/home'));
router.use('/oauth', require('../routes/auth/oauth'));
router.use('/api', require('../routes/api/albums'));


module.exports = router;
