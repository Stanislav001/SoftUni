function solve(input) {
    let items = input.shift().split(', ');

    let currentCommand = input.shift();

    while (currentCommand !== 'Craft!') {
        const tokes = currentCommand.split(' - ');
        const commandType = tokes[0];
        const item = tokes[1].split(':');
        const oldItem = item[0];
        const newItem = item[1];

        const itemIsExist = items.includes(oldItem);
        if (commandType === 'Collect' && !itemIsExist) {
            items.push(item);
        }
        if (commandType === 'Drop' && itemIsExist) {

            items = items.filter(x => x !== oldItem);
        }
        if (commandType === 'Combine Items' && itemIsExist) {
            const indexOfOldItem = items.indexOf(oldItem);
            items.splice(indexOfOldItem + 1, 0, newItem);
        }
        if (commandType === 'Renew' && itemIsExist) {
            items = items.filter(x => x !== oldItem);
            items.push(oldItem);
        }
        currentCommand = input.shift();
    }
    console.log(items.join(', '));
}

solve(['Iron, Wood, Sword', 'Collect - Gold', 'Drop - Wood', 'Craft!']);
console.log('---');
solve(['Iron, Sword', 'Drop - Bronze', 'Combine Items - Sword:Bow', 'Renew - Iron', 'Craft!']);