function solve(input) {
    let result = '';
    for (let index = 0; index < input.length; index++) {
        if (index % 2 === 0) {
            result +=  input[index] + ' ';
        }
    }
    console.log(result);
}

solve(['20', '30', '40', '50', '60']);
console.log('---');
solve(['5', '10']);