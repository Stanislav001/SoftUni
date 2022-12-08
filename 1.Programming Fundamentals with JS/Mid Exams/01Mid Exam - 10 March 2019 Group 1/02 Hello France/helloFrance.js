const MAX_CLOTHES_PRICE = 50;
const MAX_SHOES_PRICE = 35;
const MAX_ACCESSORIES_PRICE = 20.50;

function solve(input) {
    let items = input.shift().split('|');
    let budget = Number(input.shift());
    
    let profit = 0;
    let result = [];
    let currentMoney = budget;

    for (let index = 0; index < items.length; index++) {
        const[type, price] = items[index].split('->')
       
        if (price > currentMoney) {
            continue;
        }

        const finalPrice = price * 1.4;
        if (type === 'Shoes') {
            if (price <= MAX_SHOES_PRICE) {
                profit += finalPrice;
                currentMoney -= price;
                result.push(finalPrice);
            }
        }

        if (type === 'Accessories') {
            if (price <= MAX_ACCESSORIES_PRICE) {
                profit += finalPrice;
                currentMoney -= price;
                result.push(finalPrice);
            }
        }

        if (type === 'Clothes') {
            if (price <= MAX_CLOTHES_PRICE) {
                profit += finalPrice;
                currentMoney -= price;
                result.push(finalPrice);
            }
        }
    }

    const sum = (profit + currentMoney) - budget;
    console.log(result.map(x => x.toFixed(2)).join(' '));
    console.log(`Profit: ${sum.toFixed(2)}`);

    if (sum + budget >= 150) {
        console.log(`Hello, France!`);
    } else {
        console.log(`Time to go.`);
    }
}

solve(['Clothes->43.30|Shoes->25.25|Clothes->36.52|Clothes->20.90|Accessories->15.60', 120])