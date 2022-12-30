function calculator(a, b) {
    return a + b;
}

function printInfo(name, age) {
    console.log(`Name: ${name} Age: ${age}`);
}

module.exports = {
    calc: calculator,
    printInfo
};