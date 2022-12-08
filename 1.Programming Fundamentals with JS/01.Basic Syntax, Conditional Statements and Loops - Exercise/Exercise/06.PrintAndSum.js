function solve(startNumber, endNumber) {
    let sum = 0;
    let numbers = '';
    for (let index = startNumber; index <= endNumber; index++) {
        numbers += `${index} `;
        sum += index;
    }
    console.log(numbers);
    console.log(`Sum: ${sum}`)
}

solve(5, 10);