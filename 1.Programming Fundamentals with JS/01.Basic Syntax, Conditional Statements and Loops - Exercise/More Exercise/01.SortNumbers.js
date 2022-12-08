function solve(firstNumber, secondNumber, thirdNumber) {
    let result = [];
    result.push(firstNumber);
    result.push(secondNumber);
    result.push(thirdNumber);
    result.sort((a, b) => b - a)
    console.log(result.join('\n'));
}

solve(2, 1, 3);
console.log('----');
solve(-2, 1, 3);