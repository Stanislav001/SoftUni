function solve(input) {
    let numOfHeroes = Number(input.shift());
    let hero = {};

    for (let index = 0; index < numOfHeroes; index++) {
        const [name, hp, mp] = input.shift().split(' ');
        hero[name] = [Number(hp), Number(mp)];
    }

    let currentCommand = input.shift();

    while (currentCommand !== 'End') {
        const [typeOfCommand, heroName, firstArg, secondArg] = currentCommand.split(' - ');

        if (typeOfCommand === 'CastSpell') {
            if (hero[heroName]) {
                if (hero[heroName][1] >= Number(secondArg)) {
                    hero[heroName][1] -= Number(secondArg);
                    console.log(`${heroName} has successfully cast ${firstArg} and now has ${hero[heroName][1]} MP!`);
                }
            } else {
                console.log(`${heroName} does not have enough MP to cast ${firstArg}!`);
            }
        }

        currentCommand = input.shift();
    }
}

solve(['2',
    'Solmyr 85 120',
    'Kyrre 99 50',
    'Heal - Solmyr - 10',
    'Recharge - Solmyr - 50,',
    'TakeDamage - Kyrre - 66 - Orc',
    'CastSpell - Kyrre - 15 - ViewEarth',
    'End'
]);