function solve(input) {
    let heroes = [];

    input.forEach(row => {
        const [name, level, items] = row.split(' / ');
        const currentHero = {
            name,
            level,
            items
        };
        heroes.push(currentHero);
    });

    heroes.sort((a, b) => a.level - b.level);

    heroes.forEach(hero => {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    });
}

solve([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']);