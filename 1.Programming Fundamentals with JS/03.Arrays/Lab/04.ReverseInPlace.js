function solve(input) {
    let resultArray = [];
    for (let index = input.length - 1; index >= 0; index--) {
        resultArray.push(input[index])
    }
    console.log(resultArray.join(' '));
}

solve(['a', 'b', 'c', 'd', 'e']);
solve(['abc', 'def', 'hig', 'klm', 'nop']);
solve(['33', '123', '0', 'dd']);