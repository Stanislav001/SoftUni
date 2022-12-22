function solve(input) {
    let cities = [];

    for (const row of input) {
        const [name, product, price] = row.split(' | ');
        const currentCity = { name, product, price: Number(price) }

        const isExist = cities.findIndex((item) => item.product === product);

        if (isExist !== -1) {
            const currentItem = cities[isExist];
            if (currentItem.price < currentCity.prices) {
                cities = cities.filter(x => x.product !== currentCity.product);
                cities.push(currentCity);
            }
        } else {
            cities.push(currentCity);
        }
    }

    for (const city of cities) {
        console.log(`${city.product} -> ${city.price} (${city.name})`);
    }
}

solve(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']);