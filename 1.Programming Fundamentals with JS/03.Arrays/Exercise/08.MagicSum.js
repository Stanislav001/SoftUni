function solve(inputArray, b) {
    for (let i = 0; i < inputArray.length - 1; i++) {
        for (let j = i + 1; j < inputArray.length; j++) {
            if (Number(inputArray[i]) + Number(inputArray[j]) === Number(b)) {
                console.log(inputArray[i] + ` ` + inputArray[j]);
            }
        }
    }
}

solve([1, 7, 6, 2, 19, 23], 8);
console.log('---');
solve([14, 20, 60, 13, 7, 19, 8], 27);
console.log('---');
solve([1, 2, 3, 4, 5, 6], 6);
console.log('---');