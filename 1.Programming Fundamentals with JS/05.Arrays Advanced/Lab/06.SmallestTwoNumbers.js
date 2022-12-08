function solve(input) {
    let sortedInAscending = input.sort((a, b) => a - b);

    console.log(sortedInAscending.splice(0, 2).join(' '));
}

solve([30, 15, 50, 5]);
solve([3, 0, 10, 4, 7, 3]);