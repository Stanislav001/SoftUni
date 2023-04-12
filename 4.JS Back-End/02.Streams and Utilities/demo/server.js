const http = require('http');

http.createServer((req, res) => {
    console.log('Request');

    if (req.method === 'GET') {
        res.write('OK');
        res.end();
    } else if (req.method === 'POST') {
        let body = '';
        req.on('data', data => {
            console.log(data.toString());
            body += data;
        });
        req.on('end', () => {
            console.log('Body', JSON.parse(body));
            let bodyAsObject = JSON.parse(body);
            bodyAsObject.price++;
            res.write(JSON.stringify(bodyAsObject));
            res.end();
        });
    }
    res.end();
}).listen(3000);