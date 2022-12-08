function solve(inputArray, numOfRotations) {

    while (numOfRotations > 0) {
        const firstElement = inputArray.shift();
        inputArray.push(firstElement);
        numOfRotations--;
    }
    console.log(inputArray.join(' '));
}

solve([51, 47, 32, 61, 21], 2);
solve([32, 21, 61, 1], 4);
solve([2, 4, 15, 31], 5);