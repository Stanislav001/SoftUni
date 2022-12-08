function solve(input) {
    let numberOfCities = Number(input.shift());
    let countOfCities = 0;
    let totalProfit = 0;

    while (numberOfCities > 0) {
        for (let index = 0; index < input.length; index++) {
            const cityName = input.shift();
            let firstValue = Number(input.shift());
            let secondValue = Number(input.shift());
            countOfCities++;
            let result = 0;

            if (countOfCities % 3 === 0 && countOfCities % 5 !== 0) {
                secondValue += secondValue * 0.5;
            }
            if (countOfCities % 5 === 0) {
                firstValue -= firstValue * 0.1;
            }
            result = firstValue - secondValue;
            totalProfit += result;
            numberOfCities--;
            console.log(`In ${cityName} Burger Bus earned ${result.toFixed(2)} leva.`);
        }
    }
    console.log(`Burger Bus total profit: ${totalProfit.toFixed(2)} leva.`);
}

solve(["5",
    "Lille",
    "2226.00",
    "1200.60",
    "Rennes",
    "6320.60",
    "5460.20",
    "Reims",
    "600.20",
    "452.32",
    "Bordeaux",
    "6925.30",
    "2650.40",
    "Montpellier",
    "680.50",
    "290.20"])
