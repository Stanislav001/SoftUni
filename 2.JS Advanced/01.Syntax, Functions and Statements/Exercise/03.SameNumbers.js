function solve(num) {
    let sum = 0;
    let flag = true;
    let digit = num % 10;
    digit = Math.trunc(digit);
    while(num > 1) {
        let currDigit = num % 10;
        currDigit = Math.trunc(currDigit);
        if (currDigit != digit) {
            flag = false;
        }
        sum += currDigit;
        num = num / 10;
    }
    console.log(flag);
    console.log(sum);
}


solve(2222222);