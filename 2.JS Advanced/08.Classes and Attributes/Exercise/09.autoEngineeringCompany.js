function autoEngineeringCompany(input) {
    const brands = new Map();

    for (const car of input) {
        const [brand, model, quantity] = car.split(' | ');

        if (!brands.has(brand)) {
            const models = new Map();

            models.set(model, Number(quantity));
            brands.set(brand, models);
        } else {
            let models = brands.get(brand);

            if (!models.has(model)) {
                models.set(model, Number(quantity));
            } else {
                models.set(model, models.get(model) + Number(quantity));
            }
        }
    }

    for (const [brand, models] of brands) {
        console.log(brand);

        for (const [model, quantity] of models) {
            console.log(`###${model} -> ${quantity}`);
        }
    }
}

autoEngineeringCompany([
    'Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10'
]);