function solve(inputArr = [], step) {
    let resultArr = [];
    for (i = 0; i < inputArr.length; i += step) {
        resultArr.push(inputArr[i]);
    }

    return resultArr;
}

console.log(solve(['5', '20', '31', '4', '20'], 2));
console.log(solve(['dsa', 'asd', 'test', 'tset'], 2));