const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

http.createServer((req,res) => {
    res.writeHead(200, {'content-type': 'text/plain'});
    res.end('Hello Anurag\n');

}).listen(port,hostname ,() => {
    console.log('Server will run at http://${hostname}:${port}');
});
