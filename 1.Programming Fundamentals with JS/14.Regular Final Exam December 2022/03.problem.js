function solve(input) {
    let number = Number(input.shift());
    let currentCommand = input.shift();
    let users = {};
    let usersCount = 0;

    while (currentCommand !== 'Statistics') {
        let [commandType, firstArg, secondArg, thirdArg] = currentCommand.split('=');

        let currentMessages = Number(secondArg) + Number(thirdArg);
        switch (commandType) {
            case 'Add':
                if (!users[firstArg]) {
                    users[firstArg] = [Number(secondArg), Number(thirdArg)];
                }
                break;
            case 'Message':
                if (users[firstArg] && users[secondArg]) {
                    users[firstArg][0] += 1;
                    users[secondArg][1] += 1;
                }
                if (users[firstArg] && users[secondArg]) {
                    let totalSender = users[firstArg][0] + users[firstArg][1];
                    let totalRec = users[secondArg][0] + users[secondArg][1];
                    
                     if (totalSender >= number) {
                        delete users[firstArg];
                        console.log(`${firstArg} reached the capacity!`);
                    }
                    if (totalRec >= number) {
                        delete users[secondArg];
                        console.log(`${secondArg} reached the capacity!`);
                    }
                    if (totalRec >= number) {
                        delete users[secondArg];
                    }
                }
                break;
            case 'Empty':
                if (firstArg !== 'All') {
                    delete users[firstArg];
                }
                if (firstArg == 'All') {
                    users ={};
                }
                break;
        }
        currentCommand = input.shift();
    }

    for (const user in users) {
        usersCount++;
    }

    console.log(`Users count: ${usersCount}`);
    for (const user in users) {
        let totalMessages = users[user][0] + users[user][1];
        console.log(`${user} - ${totalMessages}`);
    }
}

solve(["20",
"Add=Mark=3=9",
"Add=Berry=5=5",
"Add=Clark=4=0",
"Empty=Berry",
"Add=Blake=9=3",
"Add=Michael=3=9",
"Add=Amy=9=9",
"Message=Blake=Amy",
"Message=Michael=Amy",
"Statistics"]);