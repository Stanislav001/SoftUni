function solve(input) {
    let result = [];
    for (const currentRow of input) {
        const [name, lat, long] = currentRow.split(' | ');
        const currentTown = {
            'Town': name, 
            'Latitude': lat,
            'Longitude': long,
        }
        result.push(currentTown);
    }
    console.log(JSON.stringify(result));
}

solve(['| Town | Latitude | Longitude |', '| Sofia | 42.696552 | 23.32601 |', '| Beijing | 39.913818 | 116.363625 |']);