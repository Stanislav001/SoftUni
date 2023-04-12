const logger = require('./logger');
const { isAdmin } = require('./auth');
const catalogController = require('./catalog');
const express = require('express');

const app = express();

app.use('/public', express.static('public'))
app.use(logger);
app.use('/catalog', catalogController);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/getOrder', (req, res) => {
    res.download(__dirname + '/demo_file.pdf');
});

app.get('/create', (req, res) => {
    res.send('<form method="POST"><input name="name"><button>Send</button></form>');
});

app.post('/create', isAdmin, (req, res) => {
    res.status(201).json({
        _id: 'sadsadas',
        name: 'Product 1',
        price: 53
    });
});

app.get('/about', (req, res) => {
    res.send('About page');
});

app.get('/contact', (req, res) => {
    res.redirect('/about');
})

app.all('*', (req, res) => {
    res.send('404 Custom Not Found Page!!!')
})

app.listen(3000);