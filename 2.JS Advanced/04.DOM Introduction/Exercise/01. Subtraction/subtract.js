function subtract() {
    const firstNumberElement = document.getElementById('firstNumber');
    const secondNumberElement = document.getElementById('secondNumber');
    const resultElement = document.getElementById('result');

    const result = firstNumberElement.value - secondNumberElement.value;
    resultElement.textContent = result;
}