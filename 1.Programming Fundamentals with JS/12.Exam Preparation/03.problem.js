function solve(input) {
    let numbers = Number(input.shift());
    let plants = {};

    while (numbers > 0) {
        const [plant, rarity] = input.shift().split('<->');
        plants[plant] = rarity;
        numbers--;
    }

    let currentCommand = input.shift();
    while (currentCommand !== 'Exhibition') {
        const commandType = currentCommand.split(': ')[0];
        const [firstArg, secondArg] = currentCommand.split(': ')[1].split(' - ');


        currentCommand = input.shift();
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