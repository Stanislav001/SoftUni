const express = require('express');
const hbs = require('express-handlebars');

const carsService = require('./services/cars');

const { home } = require('./controllers/home');
const { about } = require('./controllers/about');
const create = require('./controllers/create');
const edit = require('./controllers/edit');
const { details } = require('./controllers/details');
const deleteController = require('./controllers/delete');

const { notFound } = require('./controllers/notFound');

const app = express();

app.engine('hbs', hbs.create({ extname: 'hbs' }).engine);
app.set('view engine', 'hbs');

app.use(express.urlencoded({ extended: true }));
app.use('/static', express.static('static'));
app.use(carsService());

app.get('/', home);
app.get('/about', about);
app.get('/details/:id', details);
app.route('/create').get(create.get).post(create.post);
app.route('/edit/:id').get(edit.get).post(edit.post);
app.route('/delete/:id').get(deleteController.get).post(deleteController.post);

app.all('*', notFound);

app.listen(3000, () => console.log('Server started on port: 3000'))