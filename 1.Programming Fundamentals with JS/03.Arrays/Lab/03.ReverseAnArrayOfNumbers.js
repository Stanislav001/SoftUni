function solve(n, inputArr) {
    let resultArray = [];

    for (let index = n - 1; index >= 0; index--) {
        resultArray.push(inputArr[index]);
    }
    console.log(resultArray.join(' '));
}

solve(3, [10, 20, 30, 40, 50]);
solve(4, [-1, 20, 99, 5]);
solve(2, [66, 43, 75, 89, 47]);