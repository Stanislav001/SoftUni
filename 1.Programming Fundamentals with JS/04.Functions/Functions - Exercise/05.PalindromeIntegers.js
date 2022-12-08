function solve(inputArray) {
    function isPalindrome(number) {
        const reversedNumber = number.toString().split('').reverse().join('');
        if (number === Number(reversedNumber)) {
            return true;
        } else {
            return false;
        }
    }

    for (let index = 0; index < inputArray.length; index++) {
        console.log(isPalindrome(inputArray[index]));
    }
    isPalindrome(123)
}

solve([123, 323, 421, 121]);
solve([32, 2, 232, 1010]);