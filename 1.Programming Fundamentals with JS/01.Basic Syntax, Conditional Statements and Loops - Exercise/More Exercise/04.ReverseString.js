function solve(input) {
    let reversedString = '';
    for (let index = input.length - 1; index >= 0; index--) {
        reversedString += input[index];
    }
    console.log(reversedString);
}

solve('Hello');
solve('SoftUni');
solve('1234');