function solve(firstChar, secondChar) {
    let charactersInRange = [];
    const startChar = Math.min(firstChar.charCodeAt(0), secondChar.charCodeAt(0));
    const endChar = Math.max(firstChar.charCodeAt(0), secondChar.charCodeAt(0));

    for (let index = startChar + 1; index < endChar; index++) {
        charactersInRange.push(String.fromCharCode(index));
    }
    console.log(charactersInRange.join(' '));
}
solve('a', 'd');