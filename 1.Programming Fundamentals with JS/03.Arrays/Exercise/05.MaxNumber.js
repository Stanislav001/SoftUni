function solve(inputArray) {
    let result = [];
    while(inputArray.length !== 0) {
        let [current, biggest] = [inputArray.shift(), Math.max(...inputArray)]
        if(current > biggest) result.push(current);
   }
   
   console.log(result.join(' '));
}

solve([1, 4, 3, 2]);
solve([14, 24, 3, 19, 15, 17]);
solve([41, 41, 34, 20]);
solve([27, 19, 42, 2, 13, 45, 48]);