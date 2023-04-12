const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
    res.send('Catalog page');
});

router.get('/:productId', (req, res) => {
    console.log(req.params);
    res.send('Detail page');
});

module.exports = router;