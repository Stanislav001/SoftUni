function solve(input) {
    for (const row of input) {
        const tokens = row.split(', ');
        const fullName = tokens[0];
        const currentPerson = createPerson(fullName);
        currentPerson.printInfo();
    }

    function createPerson(fullName) {
        const personalNumber = fullName.length;

        const person = {
            name: fullName,
            personalNumber,
            printInfo() {
                console.log(`Name: ${fullName} -- Personal Number: ${personalNumber}`);
            }
        }
        return person;
    }
}

function personInformation(input) {
    let employeeList = {};

    input.forEach(person => {
        employeeList[person] = person.length;
    });

    for (const key in employeeList) {
        console.log(`Name: ${key} -- Personal Number: ${employeeList[key]}`);
    }
}

solve(['Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal']);
console.log('---');
solve(['Samuel Jackson', 'Will Smith', 'Bruce Willis', 'Tom Holland']);