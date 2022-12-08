function solve(input) {
    const typeOfUser = input.pop();
    let moneyWithoutTaxes = 0;
    let taxes = 0;
    let moneyWithTaxes = 0;
    let result = 0;

    for (const element of input) {
        if (element < 0) {
            console.log('Invalid price!');
        } else {
            moneyWithoutTaxes += element;
        }
    }

    taxes = moneyWithoutTaxes * 0.2;
    moneyWithTaxes = moneyWithoutTaxes + taxes;

    if (typeOfUser === 'special') {
        moneyWithTaxes -= moneyWithTaxes * 0.1;
    }

    if (moneyWithTaxes === 0) {
        console.log('Invalid order!');
    } else {
        console.log(`
        "Congratulations you've just bought a new computer!
        Price without taxes: ${moneyWithoutTaxes.toFixed(2)}$
        Taxes: ${taxes.toFixed(2)}$
        -----------
        Total price: ${moneyWithTaxes.toFixed(2)}$"`);
    }
}

solve([1050, 200, 450, 2, 18.50, 16.86, 'special']);
console.log('---');
solve([1023, 15, -20, -5.50, 450, 20, 17.66, 19.30, 'regular']);