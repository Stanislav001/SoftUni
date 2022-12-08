function solve(firstNum, secondNum, thirdNum) {
    function sum(firstNum, secondNum) {
        return firstNum + secondNum;
    }
    function subtract(firstNum, secondNum) {
        return firstNum - secondNum;
    }
    const sumOfFirstTwoElements = sum(firstNum, secondNum);
    const result = subtract(sumOfFirstTwoElements, thirdNum);
    console.log(result);
}

solve(23, 6, 10);
solve(1, 17, 30);