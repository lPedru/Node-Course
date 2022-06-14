const http = require('http');

const PORT = 3000;

const friends = [
    {
        id: 0,
        name: 'Isaac Newton'
    },
    {
        id: 1,
        name: 'Albert Einstein'
    },
    {
        id: 2,
        name: 'Nicola Tesla'
    }
]

const server = http.createServer((req, res) => {
    const items = req.url.split('/');
    // /friends/2 => ['', 'friends', '2']

    if (req.method === 'POST' && items[1] === 'friends') {
        req.on('data', (data) => {
            const friend = data.toString();
            console.log('Request: ', friend);
            friends.push(JSON.parse(friend));
            req.pipe(res);
        });
    } else if (req.method === 'GET' && items[1] === 'friends') {

        // res.writeHead(200, {
        //     'Content-Type': 'application/json'
        // });


        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        if (items.length === 3) {
            const friendIndex = Number(items[2]);
            res.end(JSON.stringify(friends[friendIndex]));
        } else {
            res.end(JSON.stringify(friends));
        }

    } else if (req.method === 'GET' && items[2] === 'messages') {
        res.write('<html>');
        res.write('<body>');
        res.write('<ul>');
        res.write('<li>Hello HTML</li>');
        res.write('<li>Hello HTTP</li>');
        res.write('</ul>');
        res.write('</body>');
        res.write('</html>');
        res.end();
    } else {
        res.statusCode = 400;
        res.end();
    }
    
});

server.listen(PORT, () => console.log(`Listening on port ${PORT}.`)); // 127.0.0.1 => localhost