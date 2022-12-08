function solve(input) {
    let text = input.shift();
    let currentCommand = input.shift();

    while (currentCommand !== 'End') {
        let [commandType, firstArg, secondArg] = currentCommand.split(' ');

        switch (commandType) {
            case 'Translate':
                while (text.includes(firstArg)) {
                    text = text.replace(firstArg, secondArg);
                }
                console.log(text);
                break;
            case 'Includes':
                if (text.includes(firstArg)) {
                    console.log('True');
                } else {
                    console.log('False');
                }
                break;
            case 'Start':
                if (text.startsWith(firstArg)) {
                    console.log('True');
                } else {
                    console.log('False');
                }
                break;
            case 'Lowercase':
                text = text.toLowerCase();
                console.log(text);
                break;
            case 'FindIndex':
                text = text.split('');
                let index = text.lastIndexOf(firstArg);
                text = text.join('');
                if (index) {
                    console.log(index);
                }
                break;
            case 'Remove':
                if (text[Number(firstArg)] && text[Number(secondArg)]) {
                    let substring = text.substring(Number(firstArg), Number(firstArg) + Number(secondArg));
                    text = text.replace(substring, '');
                    console.log(text);
                }
                break;
        }
        currentCommand = input.shift();
    }
}

solve(["*S0ftUni is the B3St Plac3**",
    "Translate 2 o",
    "Includes best",
    "Start the",
    "Lowercase",
    "FindIndex p",
    "Remove 2 7",
    "End"])