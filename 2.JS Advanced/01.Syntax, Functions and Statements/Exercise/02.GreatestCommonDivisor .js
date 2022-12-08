function solve(num1, num2) {
    while (num2 != 0) {
        let old2 = num2;
        num2 = num1 % num2;
        num1 = old2;
    }
    console.log(num1);
}

solve(15,5);
solve(2154, 458);