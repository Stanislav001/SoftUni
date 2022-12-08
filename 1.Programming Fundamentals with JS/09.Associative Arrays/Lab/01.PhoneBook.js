function solve(input) {
    let result = {};

    input.forEach(row => {
        const [name, phone] = row.split(' ');
        result[name] = phone
    });

    for (const key in result) {
        console.log(`${key} -> ${result[key]}`);
    }
}

solve(['Tim 0834212554', 'Peter 0877547887', 'Bill 0896543112', 'Tim 0876566344']);