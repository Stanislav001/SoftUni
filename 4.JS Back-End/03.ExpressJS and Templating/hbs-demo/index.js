const app = require('express')();
const handleBars = require('express-handlebars');

const hbs = handleBars.create({
    extname: '.hbs',
});

app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');

let visitors = 0;
const products = [
    { name: 'Widget', price: 10, promoted: true },
    { name: 'Gadget', price: 20 },
    { name: 'Fluxor', price: 30 },
];

app.get('/', (req, res) => {
    res.locals = {
        count: visitors++,
        user: {
            username: 'Peter',
            email: 'peter@gmail.com'
        }
    }
    res.render('home');
})

app.get('/catalog', (req, res) => {
    res.locals = {
        products,
    }
    res.render('catalog');
})

app.listen(3000);