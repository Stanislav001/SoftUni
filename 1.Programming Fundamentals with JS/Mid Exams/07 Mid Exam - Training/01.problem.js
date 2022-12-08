function solve(input) {
    let guineaWeight = Number(input.pop()) * 1000;
    let foodQuantity = Number(input.shift()) * 1000;
    let hayQuantity = Number(input.shift()) * 1000;
    let coverQuantity = Number(input.shift()) * 1000;

    for (let index = 1; index <= 30; index++) {
        foodQuantity -= 300;

        if (index % 2 === 0) {
            hayQuantity -= foodQuantity * 0.05;
        }

        if (index % 3 === 0) {
            coverQuantity -= guineaWeight / 3;
        }

        if (foodQuantity <= 0 || hayQuantity <= 0 || coverQuantity <= 0) {
            break;
        }
    }

    if (foodQuantity <= 0 || hayQuantity <= 0 || coverQuantity <= 0) {
        console.log('Merry must go to the pet store!');
    } else {

        console.log(`Everything is fine! Puppy is happy! Food: ${(foodQuantity / 1000).toFixed(2)}, Hay: ${(hayQuantity / 1000).toFixed(2)}, Cover: ${(coverQuantity / 1000).toFixed(2)}.`);
    }
}

solve(["10", "5", "5.2", "1"]);
console.log('---');
solve(["1", "1.5", "3", "1.5"]);
console.log('---');
solve(["9", "5", "5.2", "1"]);