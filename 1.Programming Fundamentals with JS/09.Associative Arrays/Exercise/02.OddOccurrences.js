function solve(input) {
    const parsedInput = input.split(' ').map(el => el.toLowerCase());
    let result = {};

    for (let index = 0; index < parsedInput.length; index++) {
        if (!result.hasOwnProperty(parsedInput[index])) {
            result[parsedInput[index]] = [];
        }
        result[parsedInput[index]].push(index);
    }

    let sortedArray = Object.entries(result);

    sortedArray.sort((kvpA, kvpB) => kvpA[1][0] - kvpB[1][0]);
    let res = '';

    for (const element of sortedArray) {
        if (element[1].length % 2 !== 0) {
            res += `${element[0]} `;
        }
    }

    console.log(res);
}

solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');