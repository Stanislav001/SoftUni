module.exports = {
    get(req, res) {
        res.render('create', { title: 'Create car' });
    },
    async post(req, res) {
        const car = {
            name: req.body.name,
            description: req.body.description,
            imageUrl: req.body.imageUrl,
            price: Number(req.body.price)
        }

        req.storage.createCar(car);
        res.redirect('/');
    }
}