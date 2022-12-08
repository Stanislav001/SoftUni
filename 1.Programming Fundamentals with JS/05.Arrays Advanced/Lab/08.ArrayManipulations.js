function solve(commands) {
    let array = commands.shift().split(' ').map(Number);

    for (let index = 0; index < array.length; index++) {
        let [command, firstNum, secondNum] = commands[index].split(' ');
        firstNum = Number(firstNum);
        secondNum = Number(secondNum);

        switch (command) {
            case 'Add':
                array.push(firstNum);
                break;
            case 'Remove':
                array = array.filter(el => el !== firstNum);
                break;
            case 'RemoveAt':
                array.splice(firstNum, 1);
                break;
            case 'Insert':
                array.splice(firstNum, 0, secondNum);
                break;
        }
    }

    console.log(array.join(' '));
}
solve(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3']
);