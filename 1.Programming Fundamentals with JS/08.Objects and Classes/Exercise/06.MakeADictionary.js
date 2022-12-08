function solve(input) {
    let result = {};

    for (const element of input) {
        const parsedElement = JSON.parse(element)
        const key = Object.keys(parsedElement)[0]
        const value = Object.values(parsedElement)[0]
        result[key] = [value]
    }

    Object.entries(result).sort((x, y) => x[0].localeCompare(y[0])).forEach(x => console.log(`Term: ${x[0]} => Definition: ${x[1]}`))
}

solve([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
]
);