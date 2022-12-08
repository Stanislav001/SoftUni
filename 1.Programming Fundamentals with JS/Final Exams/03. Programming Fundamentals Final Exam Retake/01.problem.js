function solve(input) {
    let message = input.shift();
    let currentCommand = input.shift();

    while (currentCommand !== 'Reveal') {
        const [command, firstArg, secondArg] = currentCommand.split(':|');

        if (command === 'InsertSpace') {
            if (message[firstArg]) {
                message = message.split('');
                message.splice(firstArg, 0, ' ');
                message = message.join('');
                console.log(message);
            }
        }

        if (command === 'Reverse') {
            if (message.includes(firstArg)) {
                const index = message.indexOf(firstArg);
                let secondPart = message
                    .substring(index, index + sub.length)
                    .split("")
                    .reverse()
                    .join("");
                let firstPart = message.substring(0, index);
                let thirdPart = message.substring(index + sub.length);
                message = firstPart + thirdPart + secondPart;
                console.log(message);
            } else {
                console.log('error');
            }
        }

        if (command === 'ChangeAll') {
            while (message.includes(firstArg)) {
              let index = message.indexOf(firstArg);
              let part = message.substring(index, index + firstArg.length);
              message = message.replace(part, secondArg);
            }
            console.log(message);
        }

        currentCommand = input.shift();
    }
}


solve([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
]
);