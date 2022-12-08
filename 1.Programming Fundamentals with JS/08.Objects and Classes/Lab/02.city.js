function solve(inputObject) {
    const keys = Object.keys(inputObject);

    for (const key of keys) {
        console.log(`${key} -> ${inputObject[key]}`);
    }
}

solve({ name: "Sofia", area: 492, population: 1238438, country: "Bulgaria", postCode: "100" });