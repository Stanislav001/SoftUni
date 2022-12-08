function solve(firstNumber, secondNumber, typeOfOperation) {
    let result = 0;

    switch (typeOfOperation) {
        case 'multiply':
            result = firstNumber * secondNumber;
            break;
        case 'divide':
            result = firstNumber / secondNumber;
            break;
        case 'add':
            result = firstNumber + secondNumber;
            break;
        case 'subtract':
            result = firstNumber - secondNumber;
            break;
        default:
            console.log('Incorrect operation!');
    }

    console.log(result);
}

solve(5, 5, 'multiply');
solve(40, 8, 'divide');
solve(12, 19, 'add');
solve(50, 13, 'subtract')