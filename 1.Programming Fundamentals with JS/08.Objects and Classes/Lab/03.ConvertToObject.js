function solve(input) {
    const objectResult = JSON.parse(input);
    const keys = Object.keys(objectResult);

    for (const key of keys) {
        console.log(`${key}: ${objectResult[key]}`);
    }
}

solve('{"name": "George", "age": 40, "town": "Sofia"}');