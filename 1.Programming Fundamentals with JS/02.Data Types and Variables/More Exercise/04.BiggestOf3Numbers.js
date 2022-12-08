function solve(firstNumber, secondNumber, thirdNumber) {
    let result = [];
    result.push(firstNumber);
    result.push(secondNumber);
    result.push(thirdNumber);
    result.sort((a, b) => b - a);
    const biggestNumber = result.shift();
    console.log(biggestNumber);
}

solve(-2, 7, 3);
solve(130, 5, 99);
solve(43, 43.2, 43.1);