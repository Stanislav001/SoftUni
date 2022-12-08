function solve(input) {
    let result = new Map();

    for (const element of input) {
        const [command, carNumber] = element.split(', ')

        if (command === 'IN') {
            result.set(carNumber, command);
        }
        if (command === 'OUT') {
            delete result.delete(carNumber);
        }
    }
5
    let sortedArray = Array.from(result);
    sortedArray.sort((a, b) => a[0].localeCompare(b[0]));

    if (sortedArray.length === 0) {
        console.log('Parking Lot is Empty');
    } else {
        for (const carNumber of sortedArray) {
            console.log(carNumber[0]);
        }
    }
}

solve(['IN, CA2844AA', 'IN, CA1234TA', 'OUT, CA2844AA', 'IN, CA9999TT', 'IN, CA2866HI', 'OUT, CA1234TA', 'IN, CA2844AA', 'OUT, CA2866HI', 'IN, CA9876HH', 'IN, CA2822UU']);
console.log('---');
solve(['IN, CA2844AA', 'IN, CA1234TA', 'OUT, CA2844AA', 'OUT, CA1234TA']);