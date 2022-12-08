function solve(array) {
    let targets = array.shift().split(` `).map(x => Number(x));
    let i = 0;
    let command = array[i];
    let length = targets.length;

    while (command != "End") {
        let commandAsArray = command.split(` `);
        switch (commandAsArray[0]) {
            case "Shoot":
                if (commandAsArray[1] <= length) {
                    let power = Number(commandAsArray[2]);
                    targets[commandAsArray[1]] = Number(targets[commandAsArray[1]]);
                    targets[commandAsArray[1]] -= Number(power);
                }
                if (targets[commandAsArray[1]] <= 0) {
                    targets.splice(commandAsArray[1], 1);
                }; break;

            case "Add": if (commandAsArray[1] < length && commandAsArray[1] >= 0) {
                let value = Number(commandAsArray[2]);
                targets[commandAsArray[1]] = Number(targets[commandAsArray[1]]);
                targets.splice(commandAsArray[1], 0, value);
            }
            else {
                console.log(`Invalid placement!`);
            }; break;

            case "Strike":
                let index = Number(commandAsArray[1]);
                let radius = Number(commandAsArray[2]);
                if (index - radius < 0 || index + radius >= length) {
                    console.log("Strike missed!")
                }
                else {
                    targets.splice(index - radius, 2 * radius + 1);
                } break;
        }
        i++;
        command = array[i];
    }
    console.log(targets.join(`|`))
}

solve(["52 74 23 44 96 110", "Shoot 5 10", "Shoot 1 80", "Strike 2 1", "Add 22 3", "End"]);
console.log('---');
solve(["1 2 3 4 5", "Strike 0 1", "End"]);