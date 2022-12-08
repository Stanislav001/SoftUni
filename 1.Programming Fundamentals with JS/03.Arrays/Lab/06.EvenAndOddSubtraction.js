function solve(inputArray) {
    let oddSum = 0;
    let eventSum = 0;

    for (let index = 0; index < inputArray.length; index++) {
        if (inputArray[index] % 2 == 0) {
            eventSum += inputArray[index];
        } else {
            oddSum += inputArray[index];
        }
    }
    const difference = eventSum - oddSum;
    console.log(difference);  
}

solve([1, 2, 3, 4, 5, 6]);
solve([3, 5, 7, 9]);
solve([2, 4, 6, 8, 10]);