function solve(input) {
    let map = new Map();

    for (const row of input) {
        const tokens = row.split(' ');
        const product = tokens[0];
        const quantity = Number(tokens[1]);

        if (!map.has(product)) {
            map.set(product, +quantity);
        } else {
            let currentQuantity = map.get(product);
            let updatedQuantity = currentQuantity += quantity;
            map.set(product, updatedQuantity);
        }
    }

    for (const line of map) {
        console.log(`${line[0]} -> ${line[1]}`);
    }
}

solve(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']
);