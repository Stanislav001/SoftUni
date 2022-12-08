function solve(input) {
    const sorted = input.sort();
    for (let index = 0; index < sorted.length; index++) {
        console.log(`${index + 1}.${sorted[index]}`);
    }
}

solve(['Potatoes', 'Tomatoes', 'Onions', 'Apples']);
console.log('---');
solve(['Watermelon', 'Banana', 'Apples']);