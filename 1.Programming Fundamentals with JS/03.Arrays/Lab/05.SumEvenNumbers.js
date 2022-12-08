function solve(input) {
    let sum = 0;
    for (let index = 0; index < input.length; index++) {
        if (Number(input[index]) % 2 === 0) {
            sum += Number(input[index]);
        }
    }
    console.log(sum);
}

solve(['1', '2', '3', '4', '5', '6']);
solve(['3', '5', '7', '9']);
solve(['2', '4', '6', '8', '10']);