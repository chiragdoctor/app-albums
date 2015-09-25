var app = require('./app');
var http = require('http');
var config = require('./config/default');


var server = http.createServer(app);
var port = config.port || 3000;

server.listen(port);
console.log("app-albums has started and listening on port " + config.port);