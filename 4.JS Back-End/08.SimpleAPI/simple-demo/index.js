const express = require('express');

const data = [
    {
        id: 'das213dsa',
        name: 'First',
        color: 'blue'
    }, {
        id: 'das213wwq',
        name: 'Second',
        color: 'red'
    }, {
        id: 'das2adasa',
        name: 'Third',
        color: 'green'
    },
];

const app = express();

app.use(express.json());

app.get('/', (req, res) => { res.json({ message: 'Hello' }); });

app.get('/api/catalog', (req, res) => {
    res.json(data);
});

app.post('/api/catalog', (req, res) => {
    const id = 'dsads2312';
    req.body.id = id;
    data.push(req.body);

    res.json(req.body);
});

app.get('/api/catalog/:id', (req, res) => {
    const id = req.params.id;
    const result = data.find(x => x.id === id);
    res.json(result);
});

app.put('/api/catalog/:id', (req, res) => {
    const id = req.params.id;
    let index;

    for (let i = 0; i < data.length; i++) {
        if (data[i].id === id) {
            index = i;
            break;
        }
    }
    req.body.id = id;
    data[index] = req.body;
    res.json(data[index]);
});

app.delete('/api/catalog/:id', (req, res) => {
    const id = req.params.id;
    let index;

    for (let i = 0; i < data.length; i++) {
        if (data[i].id === id) {
            index = i;
            break;
        }
    }
    data.splice(index, 1);
    res.status(204).end();
});

app.listen(3000);