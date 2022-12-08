function solve(numbers, parser) {
    const result = parseFloat(numbers).toFixed(parser);
    console.log(result);
}

solve(3.1415926535897932384626433832795, 2);
solve(10.5, 3);