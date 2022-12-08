function solve(inputArray) {
    let resultArray = [];

    for (let index = 0; index < inputArray.length; index++) {
        if (inputArray[index] < 0) {
            resultArray.unshift(inputArray[index]);
        } else {
            resultArray.push(inputArray[index]);
        }
    }
    console.log(resultArray.join('\n'))
}

solve(['7', '-2', '8', '9']);