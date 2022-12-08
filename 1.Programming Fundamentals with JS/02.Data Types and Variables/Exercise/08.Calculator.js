function solve(firstNumber, operation, secondNumber) {
    let result = 0;

    if (operation === '+') {
        result = firstNumber + secondNumber;
    } else if (operation === '-') {
        result = firstNumber - secondNumber;
    } else if (operation === '*') {
        result = firstNumber * secondNumber
    } else if (operation == '/' && secondNumber != 0) {
        result = firstNumber / secondNumber;
    }

    console.log(result.toFixed(2));
}

solve(5, '+', 10);
solve(25.5, '-', 3);
solve(5, '*', 10);
solve(10, '/', 2);