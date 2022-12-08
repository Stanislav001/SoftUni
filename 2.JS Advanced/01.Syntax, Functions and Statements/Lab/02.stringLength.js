function solve(firstArg, secondArg, thirdArg) {
    let totalLength = firstArg.length + secondArg.length + thirdArg.length;
    let average = Math.floor(totalLength / 3);

    console.log(totalLength);
    console.log(average);
}

solve('chocolate', 'ice cream', 'cake');
solve('pasta', '5', '22.3');