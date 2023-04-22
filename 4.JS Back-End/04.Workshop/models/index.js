const mongoose = require('mongoose');
const connectionString = 'mongodb://localhost:27017/carbicle';

require('./Car');
require('./Accessory');

async function init() {
    try {
        await mongoose.connect(connectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Database connected');

        mongoose.connection.on('error', (err) => {
            console.error('Database error');
            console.log(err);
        });
    } catch (error) {
        console.error('Error connecting to Database!');
        process.exit(1);
    }
}

module.exports = init;