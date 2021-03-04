var http = require('http');
var url = require('url');
var fs = require('fs');
var server = http.createServer(function (req, res) {
	var url_parts = url.parse(req.url, true);
	res.writeHead(200, {'Content-Type': 'text/html'});
	fs.readFile('index.html',function (err,data) {
		res.end(data);
	});
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');
