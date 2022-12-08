function solve(input) {
    let oddSum = 0;
    let evenSum = 0;

    const parsedInput = input.toString();
    for (let index = 0; index < parsedInput.length; index++) {
        if (Number(parsedInput[index]) % 2 === 0) {
            evenSum += Number(parsedInput[index]);
        } else {
            oddSum += Number(parsedInput[index]);
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

solve(1000435);
solve(3495892137259234);