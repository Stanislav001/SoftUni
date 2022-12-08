function solve(input) {
    let message = input.shift();
    let currentCommand = input.shift();

    while (currentCommand !== 'Decode') {
        const [commandType, index, value] = currentCommand.split('|');

        switch (commandType) {
            case 'Move':
                const lettersToMove = message.substring(0, Number(index));
                message = message.replace(lettersToMove, '');
                message += lettersToMove;
                break;

            case 'Insert':
                message = message.split('');
                message.splice(Number(index), 0, value);
                message = message.join('');
                break;
            case 'ChangeAll':
                while(message.includes(index)) {
                    message = message.replace(index, value);
                }
                break;
        }

        currentCommand = input.shift();
    }
    console.log(`The decrypted message is: ${message}`);
}

solve([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',
]);