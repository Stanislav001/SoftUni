const express = require('express');
const mongoose = require('mongoose');
const cors = require('./middlewares/cors');
start();

async function start() {
    try {
        await mongoose.connect('mongodb://localhost:27017/furniture', {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
        console.log('Database ready!');
    } catch (error) {
        console.error('Database connection failed!');
        process.exit(1);
    }

    const app = express();
    app.use(express.json());
    app.use(cors());

    app.get('/', (req, res) => {
        res.json({ message: 'CDSAADS' });
    });

    app.listen(3030, () => {
        console.log('Server started on port 3030');
    });
}