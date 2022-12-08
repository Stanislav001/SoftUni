function solve(firstArray, secondArray) {
    let resultArray = [];

    for (let index = 0; index < firstArray.length; index++) {
        if (index % 2 == 0) {
            const sumOfElements = Number(firstArray[index]) + Number(secondArray[index]);
            resultArray.push(sumOfElements);
        } else {
            resultArray.push(firstArray[index] + secondArray[index]);
        }
    }
    console.log(resultArray.join(' - '));
}

solve(['5', '15', '23', '56', '35'], ['17', '22', '87', '36', '11']);
solve(['13', '12312', '5', '77', '4'], ['22', '333', '5', '122', '44']);