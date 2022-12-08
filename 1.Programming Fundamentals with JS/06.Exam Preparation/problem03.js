function solve1(input) {
    let sequenceOfTargets = input.shift().split(' ').map(Number);

    while (input.length > 0) {
        let command = input.shift();

        if (command == 'End') {
            break;
        }

        let curCommand = command.split(' ')[0];

        switch (curCommand) {
            case "Shoot":
                let indexOfShoot = Number(command.split(' ')[1]);
                let power = Number(command.split(' ')[2]);
                sequenceOfTargets = shootCommand(sequenceOfTargets, indexOfShoot, power);
                break;
            case "Add":
                let indexOfAdd = Number(command.split(' ')[1]);
                let value = Number(command.split(' ')[2]);
                addCommand(sequenceOfTargets, indexOfAdd, value);
                break;
            case "Strike":
                let indexOfStrice = Number(command.split(' ')[1]);
                let radius = Number(command.split(' ')[2]);
                striceCommand(sequenceOfTargets, indexOfStrice, radius);
                break;
        }
    }

    console.log(sequenceOfTargets.join('|'));

    function shootCommand(arr, index, power) {
        let curItem = arr[index];
        let itemForRemove = arr[index];

        if (curItem == undefined) {
            return arr;
        }

        if (index <= arr.length - 1) {
            curItem = curItem - power;

        }

        if (curItem <= 0) {
            arr = arr.filter(x => x != itemForRemove);
        } else {
            arr[index] = curItem;
        }
        return arr;
    }

    function addCommand(arr, index, value) {
        if (index <= arr.length - 1) {
            arr.splice(index, 0, value);
        } else {
            console.log(`Invalid placement!`);
            return;
        }
        return arr;
    }

    function striceCommand(arr, index, radius) {
        let radiusL = index - radius;
        let radiusR = index + radius;
        if (index - radius >= 0) {
            arr = arr.splice(radiusL, radiusR);
        } else {
            console.log("Strike missed!");
            return;
        }
        return arr;
    }
}

function solve(input) {
    let targets = input.shift().split(' ').map(Number);
    let currentCommand = input.shift();

    while (currentCommand !== 'End') {
        const currentRow = currentCommand.split(' ');
        const commandName = currentRow[0];
        const index = Number(currentRow[1]);
        const value = Number(currentRow[2]);

        switch (commandName) {
            case 'Shoot':
                if (targets[index]) {
                    targets[index] -= value;
                    if (targets[index] <= 0) {
                        targets.splice(index, 1);
                    }
                }
                break;
            case 'Add':
                if (targets[index]) {
                    targets.splice(index, 0, value);
                } else {
                    console.log('Invalid placement!');
                }
                break;
            case 'Strike':
                const lowerIndex = index - value;
                const upperIndex = index + value;
                if (targets[lowerIndex] && targets[upperIndex]) {
                    targets.splice(lowerIndex, upperIndex);
                } else {
                    console.log('Strike missed!');
                }
                break;
        }
        currentCommand = input.shift();
    }
    console.log(targets.join('|'));
}

solve(["52 74 23 44 96 110", "Shoot 5 10", "Shoot 1 80", "Strike 2 1", "Add 22 3", "End"]);
console.log('---');
solve(["1 2 3 4 5", "Strike 0 1", "End"]);    