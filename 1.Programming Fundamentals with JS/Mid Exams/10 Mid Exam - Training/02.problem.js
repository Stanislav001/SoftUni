function solve(array) {
    let items = array.shift().split('|');
    let total = 0;
    let isIndexValid = (index, arr) => index >= 0 && index < arr.length;

    for (const line of array) {
        let [command, ...elements] = line.split(' ');

        if (command === 'Yohoho!') {
            break;
        }

        if (command === 'Loot') {
            for (const item of elements) {
                if (!items.includes(item)) {
                    items.unshift(item);
                }
            }
        } else if (command === 'Drop') {
            let index = Number(elements[0]);
            if (isIndexValid(index, items)) {
                let dropped = items.splice(index, 1);
                items.push(...dropped);
            }
        } else if (command === 'Steal') {
            let index = Number(elements[0]);
            let stealedTresure = items.slice(-index);
            items.splice(-index);
            console.log(stealedTresure.join(', '));
        }
    }
    total = items.reduce((sum, items) => sum + items.length, 0) / items.length;

    if (items.length > 0) {
        return `Average treasure gain: ${total.toFixed(2)} pirate credits.`
    } else {
        return "Failed treasure hunt."
    }
}

solve(["Gold|Silver|Bronze|Medallion|Cup",
    "Loot Wood Gold Coins",
    "Loot Silver Pistol",
    "Drop 3",
    "Steal 3",
    "Yohoho!"]);