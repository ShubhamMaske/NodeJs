const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    res.setHeader('Content-Type','text/html');
    if (url === '/home') {
        res.write('<http>');
        res.write('<head><title>My Web</title></head>');
        res.write('<body><h1>Welcome home</h1></body>');
        res.write('</http>');
        res.end();
    }
    else if (url === '/about') {
        res.write('<http>');
        res.write('<head><title>My Web</title></head>');
        res.write('<body><h1>Welcome to About us page</h1></body>');
        res.write('</http>');
        res.end();
    }
    else if (url === '/node') {
        res.write('<http>');
        res.write('<head><title>My Web</title></head>');
        res.write('<body><h1>Welcome to my Node Js project</h1></body>');
        res.write('</http>');
        res.end();
    }
}).listen(3000);

