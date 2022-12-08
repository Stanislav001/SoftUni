function solve(input) {
    let numbers = Number(input.shift());
    let plants = {};

    for (let index = 0; index < numbers; index++) {
        const currentRow = input.shift();
        const [plant, rarity] = currentRow.split('<->');
        plants[plant] = [Number(rarity), []];
    }

    let currentCommand = input.shift();
    while (currentCommand !== 'Exhibition') {
        const [commandType, data] = currentCommand.split(': ');
        const [firstArg, secondArg] = data.split(' - ');

        if (commandType === 'Rate') {
            if (plants[firstArg]) {
                plants[firstArg][1].push(Number(secondArg));
            } else {
                console.log('error');
            }
        }
        if (commandType === 'Update') {
            if (plants[firstArg]) {
                plants[firstArg][0] = secondArg;
            } else {
                console.log('error');
            }
        }
        if (commandType === 'Reset') {
            if (plants[firstArg]) {
                plants[firstArg][1] = [];
            } else {
                console.log('error');
            }
        }
        currentCommand = input.shift();
    }

    console.log('Plants for the exhibition:')
    for (const key in plants) {
        let currentAverage = 0;
        if (plants[key][1].length !== 0) {
            plants[key][1].map(el => currentAverage += el);
            currentAverage = currentAverage / plants[key][1].length;
        }
        console.log(`- ${key}; Rarity: ${plants[key][0]}; Rating: ${currentAverage.toFixed(2)}`);
    }
}

solve(["3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"]);