function solve(inputArr = [], n) {
    for (let i = 0; i < n; i++) {
        let popped = inputArr.pop();
        inputArr.unshift(popped);
    }

    console.log(inputArr.join(" "));
}

solve(['1', '2', '3', '4'], 2);