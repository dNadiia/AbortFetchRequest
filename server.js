const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    console.log('Received new request. Waiting...');

    const closeListener = () => {
        clearTimeout(timeout);
        console.log('Request canceled');
    };

    const timeout = setTimeout(() => {
        console.log('Sending response for request');
        req.removeListener('close', closeListener);

        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end(Math.floor(Math.random() * (456 - 1 + 1) + 1).toString());
    }, 5000);

    req.once('close', closeListener);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
