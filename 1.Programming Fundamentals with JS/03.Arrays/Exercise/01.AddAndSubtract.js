function solve(inputArray) {
    let originalArraySum = 0;
    let modifiedArraySum = 0;
    let resultArray = [];

    for (let index = 0; index < inputArray.length; index++) {
        originalArraySum += inputArray[index];
        if (inputArray[index] % 2 === 0) {
            inputArray[index] += index;
            resultArray.push(inputArray[index])
        } else {
            inputArray[index] -= index;
            resultArray.push(inputArray[index]);
        }
        modifiedArraySum += inputArray[index];
    }

    console.log(resultArray);
    console.log(originalArraySum);
    console.log(modifiedArraySum);
}

solve([5, 15, 23, 56, 35]);
solve([-5, 11, 3, 0, 2]);