function solve(input) {
    let text = input.shift();
    let regex = /(@|#){1,}([a-z]{3,})(@|#){1,}\W+(\d{1,})\W/g;

    let matches = text.matchAll(regex);

    for (const row of matches) {
        console.log(`You found ${Number(row[4])} ${row[2]} eggs!`);
    }
}

solve(['@@@@green@*/10/@yel0w@*26*#red#####//8//@limon*@*23*@@@red#*/%^&/6/@gree_een@/notnumber/###purple@@@@@*$%^&*/5/']);
console.log('---');
solve(['#@##@red@#/8/@rEd@/2/#@purple@////10/']);