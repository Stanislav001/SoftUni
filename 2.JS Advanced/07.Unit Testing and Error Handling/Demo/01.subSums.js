function solve(numbers, start, end) {
    if (!Array.isArray(numbers)) {
        return NaN;
    }
    const startIndex = Math.max(start, 0);
    const endIndex = Math.min(end, numbers.length - 1);
    const subNumbers = numbers.slice(startIndex, endIndex + 1);

    const sum = subNumbers.reduce((a, x) => a + Number(x), 0);
    return sum;
}

module.exports = solve;