function solve(inputArray) {
    const firstElement = inputArray.shift();
    const lastElement = inputArray.pop();
    const sum = Number(firstElement) + Number(lastElement);
    console.log(sum);
}

solve(['20', '30', '40']);
solve(['5', '10']);