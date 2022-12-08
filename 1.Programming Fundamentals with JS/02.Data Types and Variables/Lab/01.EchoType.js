function solve(input) {
    const typeOfInput = typeof input;
    console.log(typeOfInput);

    if (typeOfInput === 'string' || typeOfInput === 'number') {
        console.log(input);
    } else {
        console.log('Parameter is not suitable for printing');
    }
}

solve('Hello, JavaScript!');
console.log('----');
solve(18);
console.log('----');
solve(null);