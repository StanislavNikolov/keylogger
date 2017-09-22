const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
	let data = "";
	req.on('data', function(cd) {
		data += cd;
		if(data.length > 100) {
			data = "";
			req.connection.destroy();
		}
	});
	req.on('end', function() {
		console.log(data);
		res.writeHead(200);
		res.end();
	});
});

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});

