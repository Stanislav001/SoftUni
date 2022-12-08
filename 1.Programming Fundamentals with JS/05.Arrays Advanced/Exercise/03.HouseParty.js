function solve(input) {
    let listOfPeoples = [];

    for (const element of input) {
        const tokens = element.split(' ');
        const name = tokens[0];

        if (tokens.length === 3) {
            const isExist = listOfPeoples.includes(name);
            if (isExist) {
                console.log(`${name} is already in the list!`);
            } else {
                listOfPeoples.push(name);
            }
        } else {
            const indexOfUser = listOfPeoples.indexOf(name);
            if (indexOfUser !== -1) {
                listOfPeoples.splice(indexOfUser, 1);
            } else {
                console.log(`${name} is not in the list!`);
            }
        }
    }
    console.log(listOfPeoples.join('\n'));
}

solve(['Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!']
);