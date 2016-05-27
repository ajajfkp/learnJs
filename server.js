var connect = require('connect');
var serveStatic = require('serve-static');
var http = require('http');
var app = connect();
app.use(serveStatic(__dirname));
http.createServer(app).listen(80,function(){
	console.log('__dirname');
});