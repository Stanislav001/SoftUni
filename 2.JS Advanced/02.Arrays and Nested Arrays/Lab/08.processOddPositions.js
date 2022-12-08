function solve(inputArr = []) {
    return inputArr
        .filter((x, i) => i % 2 !== 0)
        .map(x => x * 2)
        .reverse()
}

console.log(solve([10, 15, 20, 25]));