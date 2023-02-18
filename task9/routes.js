const fs = require('fs');


const requestHandler = (req,res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        fs.readFile("message.txt", { encoding: "utf-8" }, (err, inputdata) => {
            if (err) {
                console.log(err);
            }
            res.write('<html>');
            res.write('<head><title>My Web</title></head>');
            res.write(`<body><p>${inputdata}</p><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>`);
            res.write('</html>');
            return res.end();
        });
    
    }
    if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFileSync('message.txt', message);
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
        });
    }
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>My Web</title></head>');
    res.write('<body><h1> Hello Welcome to Node. Js Server</h1></body>');
    res.write('</html>');
    res.end();
};

module.exports = requestHandler;

