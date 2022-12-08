function solve(num) {
    let sqrtNum = Math.floor(Math.sqrt(num));
    let prime = num != 1;
    for (var i = 2; i < sqrtNum + 1; i++) {
        if (num % i == 0) {
            prime = false;
            break;
        }
    }
    console.log(prime);
}

solve(7);
solve(8);
solve(81);