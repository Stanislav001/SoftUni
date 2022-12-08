function solve(input) {
    let numOfSongs = Number(input.shift());
    let songs = {};

    for (let index = 0; index < numOfSongs; index++) {
        const currentRow = input.shift();
        const [piece, composer, key] = currentRow.split('|');
        songs[piece] = [composer, key]
    }

    let currentCommand = input.shift();

    while (currentCommand !== 'Stop') {
        const [commandType, firstArg, secondArg, thirdArg] = currentCommand.split('|');

        if (commandType === 'Add') {
            if (songs[firstArg]) {
                console.log(`${firstArg} is already in the collection!`);
            } else {
                songs[firstArg] = [secondArg, thirdArg];
                console.log(`${firstArg} by ${secondArg} in ${thirdArg} added to the collection!`);
            }
        }
        if (commandType === 'Remove') {
            if (songs[firstArg]) {
                delete songs[firstArg];
                console.log(`Successfully removed ${firstArg}!`);
            } else {
                console.log(`Invalid operation! ${firstArg} does not exist in the collection.`);
            }
        }
        if (commandType === 'ChangeKey') {
            if (songs[firstArg]) {
                songs[firstArg][1] = secondArg;
                console.log(`Changed the key of ${firstArg} to ${secondArg}!`);
            } else {
                console.log(`Invalid operation! ${firstArg} does not exist in the collection.`);
            }
        }
        currentCommand = input.shift();
    }

    for (const key in songs) {
        console.log(`${key} -> Composer: ${songs[key][0]}, Key: ${songs[key][1]}`);
    }
}

solve([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'
]);