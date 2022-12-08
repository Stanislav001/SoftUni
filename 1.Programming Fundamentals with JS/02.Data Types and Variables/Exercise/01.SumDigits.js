function solve(number) {
    let sum = 0;
    let numberAsString = number.toString();
    numberAsString.split('').forEach(element => {
        sum += Number(element);
    });

    console.log(sum);
}

solve(245678);
solve(97561);
solve(543);