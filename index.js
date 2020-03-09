var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
	q = url.parse(req.url, true);

	res.writeHead(200, {'Content-type': 'text/html'});
	
	file = q.pathname.substr(1) + '.html'; console.log(file);

	if (q.pathname === '' || q.pathname === '/') file = 'index.html';

	if(!fs.existsSync(file)) file = '404.html';

	fs.readFile(file, function (err, data) {
		res.end(data);
	});
}).listen(8080);
