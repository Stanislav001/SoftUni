function solve(commands) {
    let result = [];
    let index = 1;

    for (const command of commands) {
        if (command === 'add') {
            result.push(index);
        } else {
            result.pop();
        }
        index++;
    }

    if (result.length > 0) {
        console.log(result.join(' '));
    } else {
        console.log('Empty');
    }
}

solve(['add', 'add', 'add', 'add']);
solve(['add', 'add', 'remove', 'add', 'add']);
solve(['remove', 'remove', 'remove']);