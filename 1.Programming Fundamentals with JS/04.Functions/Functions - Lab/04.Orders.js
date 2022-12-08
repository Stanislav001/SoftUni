function solve(typeOfProduct, quantity) {
    const COFFEE_PRICE = 1.50;
    const WATER_PRICE = 1.00;
    const COKE_PRICE = 1.40;
    const SNACKS_PRICE = 2.00;
    let result = 0;
    if (typeOfProduct === 'water') {
        result = WATER_PRICE * quantity;
    } else if (typeOfProduct === 'coffee') {
        result = COFFEE_PRICE * quantity;
    } else if (typeOfProduct === 'coke') {
        result = COKE_PRICE * quantity;
    }
    else if (typeOfProduct === 'snacks') {
        result = SNACKS_PRICE * quantity;
    }

    console.log(result.toFixed(2));
}

solve('water', 5);
solve("coffee", 2);