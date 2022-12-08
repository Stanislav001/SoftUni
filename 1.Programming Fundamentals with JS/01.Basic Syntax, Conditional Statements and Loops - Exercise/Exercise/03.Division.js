function solve(inputNumber) {
    let result = '';
    if (inputNumber % 10 === 0) {
        result = 'The number is divisible by 10'
    } else if (inputNumber % 7 === 0) {
        result = 'The number is divisible by 7';
    } else if (inputNumber % 6 === 0) {
        result = 'The number is divisible by 6';
    } else if (inputNumber % 3 === 0) {
        result = 'The number is divisible by 3';
    } else if (inputNumber % 2 === 0) {
        result = 'The number is divisible by 2';
    } else {
        result = 'Not divisible';
    }
    console.log(result);
}

solve(30);
solve(15);
solve(12);
solve(1643);