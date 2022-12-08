function solve(input) {
    let resultArray = [];

    for (const currentElement of input) {
        if (currentElement < 0) {
            resultArray.unshift(currentElement);
        } else {
            resultArray.push(currentElement);
        }
    }

    for (const el of resultArray) {
        console.log(el);
    }
}

solve([7, -2, 8, 9]);
solve([3, -2, 0, -1]);