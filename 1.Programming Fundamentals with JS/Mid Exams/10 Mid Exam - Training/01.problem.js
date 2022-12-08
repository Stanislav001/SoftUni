function solve(input) {
    let daysOfPlunder = Number(input.shift());
    let dailyPlunder = Number(input.shift());
    let expectedPlunder = Number(input.shift());
    let totalPlunder = 0;

    for (let index = 1; index <= daysOfPlunder; index++) {
        totalPlunder += dailyPlunder

        if (index % 3 === 0) {
            totalPlunder += dailyPlunder / 2;
        }
        if (index % 5 == 0) {
            totalPlunder -= totalPlunder * 0.3;
        }
    }

    if (totalPlunder >= expectedPlunder) {
        console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`);
    } else {
        console.log(`Collected only ${((totalPlunder / expectedPlunder) * 100).toFixed(2)}% of the plunder.`);
    }
}
solve(["5", "40", "100"]);
solve(["10", "20", "380"]);