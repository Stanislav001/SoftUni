function juiceFlavors(input) {
    const juiceBottles = new Map();
    const finalJuiceBottles = {};

    for (const plant of input) {
        const [name, quantity] = plant.split(' => ');

        const bottlesQuantity = {};

        if (!juiceBottles.has(name)) {
            if (Number(quantity) / 1000 >= 1) {
                bottlesQuantity.quantity = Number(quantity) % 1000;
                bottlesQuantity.bottles = Math.trunc(Number(quantity) / 1000);

                finalJuiceBottles[name] = bottlesQuantity.bottles;

            } else {
                bottlesQuantity.quantity = Number(quantity);
                bottlesQuantity.bottles = 0;
            }

            juiceBottles.set(name, bottlesQuantity);
        } else {
            const currQty = juiceBottles.get(name).quantity;

            if ((currQty + Number(quantity)) / 1000 >= 1) {
                juiceBottles.get(name).quantity = (currQty + Number(quantity)) % 1000;
                juiceBottles.get(name).bottles += Math.trunc((currQty + Number(quantity)) / 1000);

                finalJuiceBottles[name] = juiceBottles.get(name).bottles;
            } else {
                juiceBottles.get(name).quantity += Number(quantity);
            }
        }
    }

    for (const plant in finalJuiceBottles) {
        console.log(`${plant} => ${finalJuiceBottles[plant]}`)
    }
}

juiceFlavors([
    'Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549'
]);