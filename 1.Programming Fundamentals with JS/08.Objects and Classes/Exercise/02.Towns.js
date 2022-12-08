function solve(input) {
    let townInfo = {};

    for (const row of input) {
        const [townName, latitude, longitude] = row.split(' | ');
        townInfo.town = townName;
        townInfo.latitude = Number(latitude).toFixed(2);
        townInfo.longitude = Number(longitude).toFixed(2);
        console.log(townInfo);
    }
}

solve(['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625']);
console.log('---');