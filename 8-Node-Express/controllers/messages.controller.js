const path = require('path');

function getMessages(req, res) {
    //res.sendFile(path.join(__dirname, '..', 'public', 'images', 'lulu.png'));
    //res.send('<ul><li>Hello Route</li></ul>');
    res.render('messages', {
        title: 'Messages to my Friends!',
        friend: 'Elon Musk',
    })
}

function postMessage(req, res) {
    console.log('Logging');
}

module.exports = {
    getMessages,
    postMessage,
};