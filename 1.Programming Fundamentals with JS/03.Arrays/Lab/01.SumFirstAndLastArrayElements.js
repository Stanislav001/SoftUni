function solve(inputArray) {
    const firstElement = inputArray.shift();
    const lastElement = inputArray.pop();
    const sum = firstElement + lastElement;
    console.log(sum);
}

solve([20, 30, 40]);
solve([10, 17, 22, 33]);
solve([11, 58, 69]);