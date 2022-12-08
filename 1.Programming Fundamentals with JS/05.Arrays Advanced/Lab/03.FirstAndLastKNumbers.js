function solve(inputArray) {
    const index = inputArray.shift();
    const firstKElements = inputArray.slice(0, index)
    const lastKElements = inputArray.splice(-index);
    
    console.log(firstKElements.join(' '));
    console.log(lastKElements.join(' '));
}

solve([2, 7, 8, 9]);
console.log('---');
solve([3, 6, 7, 8, 9]);