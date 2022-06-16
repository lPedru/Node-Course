const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

const friendsRouter = require('./routes/friends.router');
const messagesRouter = require('./routes/messages.router');

app.use((req, res, next) => {
    const start = Date.now();
    next();
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.baseUrl}${req.url} ${delta}ms`);
});

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('index', {
        title: 'HBS',
        caption: 'Hello HBS!'
    })
});

app.use('/site', express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.use('/friends', friendsRouter);
app.use('/messages', messagesRouter);

app.listen(PORT, () => console.log('Server is running on port ', PORT));