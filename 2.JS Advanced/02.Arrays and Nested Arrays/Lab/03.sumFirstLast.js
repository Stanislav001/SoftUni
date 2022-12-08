function solve(input) {
    const firstItem = Number(input.shift());
    const lastItem = Number(input.pop());
    let result = firstItem + lastItem;
    console.log(result);
}

solve(['20', '30', '40']);
solve(['5', '10']);