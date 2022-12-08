function solve(inputString, startIndex, endIndex) {
    const result = inputString.substring(startIndex, endIndex + startIndex);
    console.log(result);
}

solve('ASentence', 1, 8);
solve('SkipWord', 4, 7);