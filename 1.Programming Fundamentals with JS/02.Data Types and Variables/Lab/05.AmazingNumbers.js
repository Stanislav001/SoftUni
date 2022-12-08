function solve(input) {
    const parseInputToString = input.toString();
    let sum = 0;

    for (let index = 0; index < parseInputToString.length; index++) {
        sum += Number(parseInputToString[index]);
    }

    const isExist = sum.toString().includes('9');
    const result = isExist ? `${input} Amazing? True`
        : `${input} Amazing? False`;
    console.log(result);
}

solve(1233);
solve(999);