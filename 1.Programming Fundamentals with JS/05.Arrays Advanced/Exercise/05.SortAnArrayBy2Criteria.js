function solve(inputArray) {
    let result = inputArray.sort();

    result.sort(function (a, b) {
        return a.length - b.length;
    });

    console.log(result.join('\n'));
}

solve(["alpha", "beta", "gamma"]);
console.log('---');
solve(["Isacc", "Theodor", "Jack", "Harrison", "George"]);