function solve(input) {
    let numOfCars = Number(input.shift());
    let cars = {};

    for (let index = 0; index < numOfCars; index++) {
        const currentRow = input.shift();
        const [model, mileage, fuel] = currentRow.split('|');
        cars[model] = [Number(mileage), Number(fuel)];
    }

    let currentCommand = input.shift();
    while (currentCommand !== 'Stop') {
        const [commandType, firstArg, secondArg, thirdArg] = currentCommand.split(' : ');

        if (commandType === 'Drive') {
            if (cars[firstArg]) {
                if (cars[firstArg][1] >= Number(thirdArg)) {
                    cars[firstArg][0] += Number(secondArg);
                    cars[firstArg][1] -= Number(thirdArg);
                    console.log(`${firstArg} driven for ${secondArg} kilometers. ${thirdArg} liters of fuel consumed.`);
                } else {
                    console.log('Not enough fuel to make that ride');
                }
                if (cars[firstArg][0] >= 100000) {
                    delete cars[firstArg];
                    console.log(`Time to sell the ${firstArg}!`);
                }
            }
        }

        if (commandType === 'Refuel') {
            if (cars[firstArg]) {
                const neededFuel = 75 - cars[firstArg][1];
                if (neededFuel < 75) {
                    cars[firstArg][1] += Number(secondArg);
                    if (cars[firstArg][1] > 75) {
                        cars[firstArg][1] = 75;
                    }
                    console.log(`${firstArg} refueled with ${secondArg} liters`);
                }
            }
        }

        if (commandType === 'Revert') {
            if (cars[firstArg]) {
                cars[firstArg][0] -= Number(secondArg);
                if (cars[firstArg][0] < 10000) {
                    cars[firstArg][0] = 10000;
                } else {
                    console.log(`${firstArg} mileage decreased by ${secondArg} kilometers`);
                }
            }
        }
        currentCommand = input.shift();
    }

    for (const key in cars) {
        console.log(`${key} -> Mileage: ${cars[key][0]} kms, Fuel in the tank: ${cars[key][1]} lt.`);
    }
}

solve([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
]);