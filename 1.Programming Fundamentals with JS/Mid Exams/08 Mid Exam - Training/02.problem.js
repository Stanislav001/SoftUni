function solve(input) {
    let health = 100;
    let bitcoin = 0;
    let rooms = input.toString().split('|');
    let bestRoomIndex = 0;

    for (const room of rooms) {
        bestRoomIndex++;
        const tokens = room.split(' ');
        const currentCommand = tokens[0];
        let value = Number(tokens[1]);

        if (currentCommand === 'potion') {
            let newHealth = (health + value > 100) ? 100 : health + value;
            console.log(`You healed for ${newHealth - health} hp.`);
            health = newHealth;
            console.log(`Current health: ${health} hp.`);
            continue;
        }

        if (currentCommand === 'chest') {
            bitcoin += value;
            console.log(`You found ${value} bitcoins.`);
            continue;
        }

        health -= value;
        if (health <= 0 && currentCommand !== 'potion' && currentCommand !== 'chest') {
            console.log(`You died! Killed by ${currentCommand}.`);
            console.log(`Best room: ${bestRoomIndex}`);
            return;
        } else {
            console.log(`You slayed ${currentCommand}.`);
        }
    }
    console.log(`You've made it!`)
    console.log(`Bitcoins: ${bitcoin}`);
    console.log(`Health: ${health}`);
}

//solve(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
console.log('---');
solve(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);