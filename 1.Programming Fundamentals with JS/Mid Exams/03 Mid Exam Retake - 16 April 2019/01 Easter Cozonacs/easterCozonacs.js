function solve(inputArray) {
    let [budget, pricePer1kgFloor] = inputArray;
    let coloredEggs = 0;
    let countOfCozonacs = 0;

    const packEggsPrice = pricePer1kgFloor * 0.75;
    const litreMilkPrice = pricePer1kgFloor * 1.25;
    const milkForOneCozonac = litreMilkPrice / 4;

    const pricePerCozonac = pricePer1kgFloor + packEggsPrice + milkForOneCozonac;

    while (budget - pricePerCozonac > 0) {
        budget -= pricePerCozonac;

        countOfCozonacs += 1;
        coloredEggs += 3;
        if (countOfCozonacs % 3 === 0) {
            coloredEggs -= countOfCozonacs - 2
        }
    }

    console.log(`You made ${countOfCozonacs} cozonacs! Now you have ${coloredEggs} eggs and ${budget.toFixed(2)}BGN left.`);
}

solve([20.50, 1.25]);
solve([15.75, 1.4]);