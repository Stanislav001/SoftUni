function solve(input) {
    let initialString = input.shift();
    let currentCommand = input.shift();

    while (currentCommand !== 'Done') {
        const [command, firstArg, secondArg] = currentCommand.split(' ');
        if (command === 'TakeOdd') {
            let raw = ''
            for (let i = 0; i < initialString.length; i++) {
                if (i % 2 !== 0) {
                    raw += initialString[i];
                }
            }
            initialString = raw;
            console.log(initialString);
        }

        if (command === 'Cut') {
            const substr = initialString.substr(firstArg, secondArg);
            initialString = initialString.replace(substr, '');
            console.log(initialString);
        }

        if (command === 'Substitute') {
            if (initialString.includes(firstArg)) {
                initialString = initialString.split(firstArg).join(secondArg);
                console.log(initialString);
            } else {
                console.log("Nothing to replace!");
            }
        }

        currentCommand = input.shift();
    }

    console.log(`Your password is: ${initialString}`)
}

solve(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done"]);