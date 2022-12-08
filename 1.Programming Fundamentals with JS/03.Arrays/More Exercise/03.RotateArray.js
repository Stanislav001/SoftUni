function solve(input) {
    let numOfRotations = Number(input.pop());

    while (numOfRotations > 0) {
        const lastElement = input.pop();
        input.unshift(lastElement);
        numOfRotations--;
    }

    console.log(input.join(' '));
}

solve(['1', '2', '3', '4', '2']);
solve(['Banana', 'Orange', 'Coconut', 'Apple', '15']);