module.exports = {
    get(req, res) {
        res.render('create', { title: 'Create car' });
    },
    async post(req, res) {
        const car = {
            name: req.body.name,
            description: req.body.description,
            imageUrl: req.body.imageUrl || undefined,
            price: Number(req.body.price)
        }

        try {
            await req.storage.createCar(car);
            res.redirect('/');
        } catch (error) {
            console.error('Error', error.message);
            res.redirect('/create');
        }
    }
}