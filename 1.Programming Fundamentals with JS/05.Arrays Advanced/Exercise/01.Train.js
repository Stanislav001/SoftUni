function solve(params) {
    let numbers = params
        .shift()
        .split(" ")
        .map((x) => Number(x));

    const maxCapacity = Number(params.shift());

    for (let index = 0; index < params.length; index++) {
        let newArray = params[index].split(' ');
        const command = newArray[0];
        const value = newArray[1];

        if (newArray.length === 2 && command === 'Add') {
            numbers.push(value);
        } else {
            const passengers = Number(newArray[0]);

            for (let secondIndex = 0; secondIndex < numbers.length; secondIndex++) {
                if (passengers + numbers[secondIndex] <= maxCapacity) {
                    numbers[secondIndex] += passengers;
                    break;
                }
            }
        }
    }
    console.log(numbers.join(' '));
}

solve(['32 54 21 12 4 0 23', '75', 'Add 10', 'Add 0', '30', '10', '75']);