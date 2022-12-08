function solve(firstArray, secondArray) {
    let result = [];
    for (let i = 0; i < firstArray.length; i++) {
        for (let j = 0; j < secondArray.length; j++) {
            if (firstArray[i] === secondArray[j]) {
                result.push(firstArray[i]);
            }
        }
    }
    console.log(result.join('\n'));
}

solve(['Hey', 'hello', 2, 4, 'Peter', 'e'], ['Petar', 10, 'hey', 4, 'hello', '2']);