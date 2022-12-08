function solve(firstNumber, secondNumber, thirdNumber) {
    const sum = firstNumber + secondNumber + thirdNumber;
    const typeOfNumber = sum % 1 === 0 ? 'Integer' : 'Float';
    console.log(`${sum}-${typeOfNumber}`);
}

solve(9, 100, 1.1);
solve(100, 200, 303);