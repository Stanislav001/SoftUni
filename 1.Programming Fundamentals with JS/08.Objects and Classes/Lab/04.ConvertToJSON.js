function solve(firstName, lastName, hairColor) {
    const person = {
        name: firstName,
        lastName,
        hairColor
    };

    const jsonResult = JSON.stringify(person);
    console.log(jsonResult);
}
solve('George', 'Jones', 'Brown');