function solve(firstArray, secondArray) {
    let sum = 0;

    for (let index = 0; index < firstArray.length; index++) {
        if (firstArray[index] === secondArray[index]) {
            sum += Number(firstArray[index])
        } else {
            console.log(`Arrays are not identical. Found difference at ${index} index`);
            return;
        }
    }


    console.log(`Arrays are identical. Sum: ${sum}`);
}

solve(['10', '20', '30'], ['10', '20', '30']);
solve(['1', '2', '3', '4', '5'], ['1', '2', '4', '4', '5']);
solve(['1'], ['10']);