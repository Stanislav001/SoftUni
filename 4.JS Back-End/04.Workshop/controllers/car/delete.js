module.exports = {
    async get(req, res) {
        const id = req.params.id;
        const car = await req.storage.getById(id);

        if (car) {
            res.render('delete', { title: 'Delete', car });
        } else {
            res.redirect('/404');
        }
    },
    async post(req, res) {
        const id = req.params.id;

        try {
            await req.storage.deleteById(id);
        } catch (error) {
            res.redirect('/404');
        }

        res.redirect('/');
    }
}