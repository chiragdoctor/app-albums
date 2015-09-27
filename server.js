var app = require('./app');
var http = require('http');
var config = require('./config/default');


var server = http.createServer(app);
server.listen(app.get('port'));

console.log("app-albums has started and listening on port " + app.get('port'));