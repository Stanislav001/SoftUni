function solve(string, char, result) {
    const res = string.replace('_', char);
    const finalResult = res === result ? 'Matched' : 'Not Matched';
    console.log(finalResult);
}
solve('Str_ng', 'I', 'Strong');
solve('Str_ng', 'i', 'String');