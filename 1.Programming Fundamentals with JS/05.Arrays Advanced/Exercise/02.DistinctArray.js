function solve(input) {
    const uniqueChars = input.filter((c, index) => {
        return input.indexOf(c) === index;
    });
    
    console.log(uniqueChars.join(' '));
}

solve([1, 2, 3, 4]);
solve([7, 8, 9, 7, 2, 3, 4, 1, 2]);