module.exports = {
    async get(req, res) {
        const id = req.params.id;

        try {
            const [car, accessories] = await Promise.all([
                req.storage.getById(id),
                req.accessory.getAll()
            ]);

            const existingIds = car.accessories.map(a => a.id.toString());
            const filteredAccessories = accessories.filter(x => existingIds.includes(x.id.toString()) === false);
            res.render('attach', { title: 'Attach Accessory', car, accessories: filteredAccessories })
        } catch (error) {
            res.redirect('/404');
        }
    },
    async post(req, res) {
        const carId = req.params.id;
        const accessoryId = req.body.accessory;

        try {
            await req.storage.attachAccessory(carId, accessoryId);
            res.redirect('/');
        } catch (error) {
            console.log(error.message);
            res.redirect('/accessory' + carId);
        }
    },
}