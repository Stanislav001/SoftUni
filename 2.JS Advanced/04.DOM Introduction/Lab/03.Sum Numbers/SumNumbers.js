function calc() {
    // Get number 
    const firstNumberInput = document.getElementById('num1');
    const secondNumberInput = document.getElementById('num2');

    // Parse numbers 
    const firstNumber = Number(firstNumberInput.value);
    const secondNumber = Number(secondNumberInput.value);

    // Set and show result
    let result = document.getElementById('sum');
    result.value = firstNumber + secondNumber;
}
