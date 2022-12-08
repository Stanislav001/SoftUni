function solve(input) {
    let initialString = input.shift();
    let currentCommand = input.shift();

    while (currentCommand !== 'Generate') {
        const[command, firstArg, secondArg, thirdArg] = currentCommand.split('>>>');

        if (command === 'Contains') {
            if (initialString.includes(firstArg)) {
                console.log(`${initialString}} contains ${firstArg}`);
            } else {
                console.log('Substring not found!');
            }
        }

        if (command === 'Flip') {
            if (firstArg === 'Upper') {
                const searchWord = initialString.substr(secondArg, thirdArg);
                initialString = initialString.replace(searchWord, searchWord.toUpperCase());
            } 
            if (firstArg === 'Lower') {
                const searchWord = initialString.substr(secondArg, thirdArg);
                initialString = initialString.replace(searchWord, searchWord.toLowerCase());
            }
            console.log(initialString);
        }

        if (command === 'Slice') {
            const firstWord = initialString.slice(0, firstArg);
            const secondWord = initialString.slice(secondArg);
            initialString = firstWord + secondWord;
            console.log(initialString);
        }
        currentCommand = input.shift();
    }
    console.log(`Your activation key is: ${initialString}`);
}

solve(["abcdefghijklmnopqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>def",
    "Contains>>>deF",
    "Generate"])
    ;