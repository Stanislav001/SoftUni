function solve(input) {
    let result = {};

    input.forEach(row => {
        const [name, address] = row.split(':');
        result[name] = address;
    });

    let sorted = Object.entries(result);
    sorted.sort((first, second) => {
        const firstName = first[0];
        const secondName = second[0];

        return firstName.localeCompare(secondName);
    });

    for (const element of sorted) {
        console.log(`${element[0]} -> ${element[1]}`);
    }
}

solve(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']
);