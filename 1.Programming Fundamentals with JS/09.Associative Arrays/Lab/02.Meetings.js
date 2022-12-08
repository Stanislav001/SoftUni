function solve(input) {
    let result = {};

    input.forEach(row => {
        const [day, name] = row.split(' ');

        if (result.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`);
        } else {
            result[day] = name;
            console.log(`Scheduled for ${day}`);
        }
    });

    for (const key in result) {
        console.log(`${key} -> ${result[key]}`);
    }
}

solve(['Monday Peter', 'Wednesday Bill', 'Monday Tim', 'Friday Tim']);