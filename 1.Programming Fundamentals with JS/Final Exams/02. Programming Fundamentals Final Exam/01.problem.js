function solve(input) {
    let initialString = input.shift();
    let currentCommand = input.shift();

    while (currentCommand !== 'Travel') {
        const [command, firstArg, secondArg] = currentCommand.split(':');

        if (command === 'Add Stop') {
            if (initialString[firstArg]) {
                initialString = initialString.split('');
                initialString.splice(firstArg, 0, secondArg);
                initialString = initialString.join('');
            }
        }

        if (command === 'Remove Stop') {
            if (initialString[firstArg] && initialString[secondArg]) {
                initialString = initialString.split('');
                initialString.splice(firstArg, secondArg - firstArg + 1);
                initialString = initialString.join('');
            }
        }

        if (command === 'Switch') {
            if (initialString.includes(firstArg)) {
                let rgx = new RegExp(firstArg, 'g');
                initialString = initialString.replace(rgx, secondArg);
            }
        }
        currentCommand = input.shift();
    }

    console.log(`Ready for world tour! Planned stops: ${initialString}`);
}
solve((["Hawai::Cyprys-Greece",
"Add Stop:7:Rome",
"Remove Stop:11:16",
"Switch:Hawai:Bulgaria",
"Travel"])
);