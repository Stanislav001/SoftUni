function factorialDivision(firstNumber, secondNumber) {
    const firstNumberFact = factorialCalculator(firstNumber);
    const secondNumberFac = factorialCalculator(secondNumber);

    const result = firstNumberFact / secondNumberFac;
    console.log(result.toFixed(2));
}

function factorialCalculator(number) {
    let result = 1;
    
    while(number !== 1) {
        result *= number;
        number--;
    }
    return result;
}

factorialDivision(5,2);
factorialDivision(6,2);