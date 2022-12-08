function solve(input) {
    let parseInput = input.toString().split('>>');
    let total = 0;

    for (const row of parseInput) {
        const tokens = row.split(' ');
        const type = tokens[0];
        const years = Number(tokens[1]);
        let kilometers = Number(tokens[2]);
        let taxes = 0;

        if (type === 'family') {
            taxes = 50;
            taxes -= years * 5;
            while (kilometers >= 3000) {
                taxes += 12;
                kilometers -= 3000;
            }
        } else if (type === 'heavyDuty') {
            taxes = 80;
            taxes -= years * 8;
            while (kilometers >= 9000) {
                taxes += 14;
                kilometers -= 9000;
            }
        } else if (type === 'sports') {
            taxes = 100;
            taxes -= years * 9;
            while (kilometers >= 2000) {
                taxes += 18;
                kilometers -= 2000;
            }
        } else {
            console.log('Invalid car type.');
            continue;
        }
        total += taxes;
        console.log(`A ${type} car will pay ${taxes.toFixed(2)} euros in taxes.`);
    }
    console.log(`The National Revenue Agency will collect ${total.toFixed(2)} euros in taxes.`);
}

solve([ 'family 3 7210>>van 4 2345>>heavyDuty 9 31000>>sports 4 7410' ]);