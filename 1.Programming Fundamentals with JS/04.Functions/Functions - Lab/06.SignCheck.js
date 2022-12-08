function solve(firstNumber, secondNumber, thirdNumber) {
    const result = firstNumber * secondNumber * thirdNumber;
    if (result < 0) {
        console.log('Negative');
    } else {
        console.log('Positive');
    }
}

solve(5, 12, -15);
solve(-6, -12, 14);
solve(-1, -2, -3);
solve(-5, 1, 1);