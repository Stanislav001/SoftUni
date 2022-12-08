function solve(matrix) {
    let combined = [];
    for (let row of matrix) {
        for (element of row) {
            combined.push(element)
        }
    };
   
    return biggest = combined.sort((x, y) => y - x)[0];
}

console.log(solve([[20, 50, 10], [8, 33, 145]]));
console.log(solve([[3, 5, 7, 12], [-1, 4, 33, 2], [8, 3, 0, 4]]));