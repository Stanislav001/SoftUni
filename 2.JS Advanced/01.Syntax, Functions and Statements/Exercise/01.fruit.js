function solve(firstArg, secondArg, thirdArg) {
    let weightInKg = (secondArg / 1000).toFixed(2);
    let money = (weightInKg * thirdArg).toFixed(2);

    console.log(`I need ${money} to buy ${weightInKg} kilograms ${firstArg}.`);
}

solve('orange', 2500, 1.80);
solve('apple', 1563, 2.35);