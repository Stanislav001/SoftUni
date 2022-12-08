function solve(inputNumber) {
    let englishNumName = ''
    const lastDigit = inputNumber.toString().slice(-1)

    if (lastDigit == 1) {
        englishNumName = "one";
    } else if (lastDigit == 2) {
        englishNumName = "two";
    } else if (lastDigit == 3) {
        englishNumName = "three";
    } else if (lastDigit == 4) {
        englishNumName = "four";
    } else if (lastDigit == 5) {
        englishNumName = "five";
    } else if (lastDigit == 6) {
        englishNumName = "six";
    } else if (lastDigit == 7) {
        englishNumName = "seven";
    } else if (lastDigit == 8) {
        englishNumName = "eight";
    } else if (lastDigit == 9) {
        englishNumName = "nine";
    }

    console.log(englishNumName);
}

solve(512);
solve(1);
solve(1643);