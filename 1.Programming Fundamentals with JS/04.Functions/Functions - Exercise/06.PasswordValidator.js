function passwordValidator(arg) {
    let toArray = arg.split("");
    let digitCount = 0;
    let isValid = true;
    let isLengthEnough = true;
    let printLine = [];
    for (let i = 0; i < toArray.length; i++) {
        let currentChar = toArray[i];
        currentChar = currentChar.charCodeAt(0);
        if (
            (currentChar >= 48 && currentChar <= 57) ||
            (currentChar >= 65 && currentChar <= 90) ||
            (currentChar >= 97 && currentChar <= 122)
        ) {
            if (currentChar >= 48 && currentChar <= 57) {
                digitCount++;
            }
        } else {
            isValid = false;
        }
    }
    if (arg.length < 6 || arg.length > 10) {
        printLine.push("Password must be between 6 and 10 characters");
        let isLengthEnough = false;
    }
    if (!isValid) {
        printLine.push("Password must consist only of letters and digits");
    }
    if (digitCount < 2) {
        printLine.push("Password must have at least 2 digits");
        isValid = false;
    }
    if (isValid && isLengthEnough) {
        printLine.push("Password is valid");
    }
    return printLine.join("\n");
}

console.log(passwordValidator('login'));
console.log('---');
console.log(passwordValidator('MyPass123'));
console.log('---');
console.log(passwordValidator('Pa$s$s'));
console.log('---');