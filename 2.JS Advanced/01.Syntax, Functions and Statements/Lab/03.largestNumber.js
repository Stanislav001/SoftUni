function solve(firstNum, secondNum, thirdNum) {
    let maxNumber = Math.max;

    if (firstNum > secondNum && firstNum > thirdNum) {
        maxNumber = firstNum;
    } else if (secondNum > firstNum && secondNum > thirdNum) {
        maxNumber = secondNum;
    } else {
        maxNumber = thirdNum;
    }
    console.log(`The largest number is ${maxNumber}`);
}

solve(5, -3, 16);
solve(-3, -5, -22.5);