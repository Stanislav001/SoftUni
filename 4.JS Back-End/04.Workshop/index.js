const express = require('express');
const hbs = require('express-handlebars');
const dbInit = require('./models/index');
const carsService = require('./services/carService');
const accessoryService = require('./services/accessoryService');

const {home } = require('./controllers/car/home');
const { about } = require('./controllers/about');
const create = require('./controllers/car/create');
const edit = require('./controllers/car/edit');
const { details } = require('./controllers/car/details');
const deleteController = require('./controllers/car/delete');
const accessory = require('./controllers/accessory/accessory');
const attach = require('./controllers/attach/attach');

const { notFound } = require('./controllers/notFound');

start();

async function start() {
    await dbInit();

    const app = express();

    app.engine('hbs', hbs.create({ extname: 'hbs' }).engine);
    app.set('view engine', 'hbs');

    app.use(express.urlencoded({ extended: true }));
    app.use('/static', express.static('static'));
    app.use(carsService());
    app.use(accessoryService());

    app.get('/', home);
    app.get('/about', about);
    app.get('/details/:id', details);
    app.route('/create').get(create.get).post(create.post);
    app.route('/edit/:id').get(edit.get).post(edit.post);
    app.route('/delete/:id').get(deleteController.get).post(deleteController.post);
    app.route('/accessory').get(accessory.get).post(accessory.post);
    app.route('/attach/:id').get(attach.get).post(attach.post);
    app.all('*', notFound);

    app.listen(3000, () => console.log('Server started on port: 3000'))
}