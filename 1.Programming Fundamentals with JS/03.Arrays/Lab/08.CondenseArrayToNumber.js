function solve(inputArray) {
    while (inputArray.length > 1) {
        let condensed = Array(inputArray.length-1);
        for (let i = 0; i < inputArray.length - 1; i++) {
            condensed[i] = Number(inputArray[i]) + Number(inputArray[i + 1]);
        }
        inputArray = condensed;
    }
    console.log(inputArray[0])
}

solve([2,10,3]);