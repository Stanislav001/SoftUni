function solve(input) {
    input = input.map(x => Number(x));

    const days = input.shift();
    const budget = input.shift();
    const people = input.shift();
    const fuelPerKmPrice = input.shift();
    const foodPerPerson = input.shift();
    const roomPerPerson = input.shift();

    let expenses = 0;
    let hotelDiscount = 1;

    if (people > 10) {
        hotelDiscount = 0.75;
    }

    expenses += foodPerPerson * people * days + roomPerPerson * people * days * hotelDiscount;

    for (let i = 0; i < days; i++) {
        expenses += input[i] * fuelPerKmPrice
        if (exceed(budget, expenses)) {
            return `Not enough money to continue the trip. You need ${(expenses - budget).toFixed(2)}$ more.`
        }

        if ((i + 1) % 3 === 0 || ((i + 1) % 5 === 0 && (i + 1) % 7 !== 0)) {
            expenses += expenses * 0.4
            if (exceed(budget, expenses))
                return `Not enough money to continue the trip. You need ${(expenses - budget).toFixed(2)}$ more.`
        }

        if ((i + 1) % 7 === 0) {
            expenses -= expenses / people
        }
    }

    return `You have reached the destination. You have ${(budget - expenses).toFixed(2)}$ budget left.`
}

function exceed(budget, expense) {
    return expense > budget
}

console.log(solve([7, 12000
    , 5
    , 1.5
    , 10
    , 20
    , 512
    , 318
    , 202
    , 154
    , 222
    , 108
    , 123]
));

console.log('---');

console.log(solve([10,
    20500,
    11,
    1.2,
    8,
    13,
    100,
    150,
    500,
    400,
    600,
    130,
    300]));