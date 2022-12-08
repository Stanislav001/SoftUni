function solve(inputArray) {
    let resultArray = [];

    for (let index = 0; index < inputArray.length; index++) {
        if (index % 2 !== 0) {
            resultArray.unshift(inputArray[index] * 2);
        }
    }

    console.log(resultArray.join(' '));
}
solve([10, 15, 20, 25]);
solve([3, 0, 10, 4, 7, 3]);
