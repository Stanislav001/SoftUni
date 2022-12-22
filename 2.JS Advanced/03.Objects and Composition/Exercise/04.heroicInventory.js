function solve(input) {
    let heroes = [];

    for (const row of input) {
        const [name, level, ...items] = row.split(' / ');

        const currentHero = { name, level, items };
        heroes.push(currentHero);
    }

    console.log(JSON.stringify(heroes));
}

solve(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
);