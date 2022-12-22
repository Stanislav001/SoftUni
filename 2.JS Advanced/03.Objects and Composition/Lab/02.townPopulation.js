function solve(input) {
    let result = {};

    for (const row of input) {
        const [name, population] = row.split(' <-> ');
        
        if (!result[name]) {
            result[name] = 0;
        }
        result[name] += Number(population);
    }

    for (const key in result) {
        console.log(`${key} : ${result[key]}`);
    }
}

solve(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000']
);