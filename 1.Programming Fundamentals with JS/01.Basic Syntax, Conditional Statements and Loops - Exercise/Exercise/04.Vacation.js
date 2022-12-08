function solve(numOfPeople, typeGroup, dayWeek) {
    let price = 0;

    switch (dayWeek) {
        case "Friday":
            if (typeGroup === "Students") {
                price += 8.45;
            } else if (typeGroup === "Business") {
                price += 10.90;
            } else if (typeGroup === "Regular") {
                price += 15;
            }
            break;
        case "Saturday":
            if (typeGroup === "Students") {
                price += 9.80;
            } else if (typeGroup === "Business") {
                price += 15.60;
            } else if (typeGroup === "Regular") {
                price += 20;
            }
            break;
        case "Sunday":
            if (typeGroup === "Students") {
                price += 10.46;
            } else if (typeGroup === "Business") {
                price += 16;
            } else if (typeGroup === "Regular") {
                price += 22.50;
            }
            break;
    }
    let neededMoney = numOfPeople * price;
    if (numOfPeople >= 30 && typeGroup === "Students") {
        let discount = neededMoney - (neededMoney * 0.15);
        console.log(`Total price: ${discount.toFixed(2)}`)
    } else if (numOfPeople >= 100 && typeGroup === "Business") {
        let freeFromTax = 10 * price;
        neededMoney -= freeFromTax;
        console.log(`Total price: ${neededMoney.toFixed(2)}`);
    } else if (numOfPeople >= 10 && numOfPeople <= 20 && typeGroup === "Regular") {
        let discount = neededMoney - (neededMoney * 0.05);
        console.log(`Total price: ${discount.toFixed(2)}`);
    } else {
        console.log(`Total price: ${neededMoney.toFixed(2)}`);
    }
}

solve(30, "Students", "Sunday");
solve(40, "Regular", "Saturday");