function bombNumbers(arreyOfNumbers = [], bombArray = []) {
    let coppyBombNumber = arreyOfNumbers.slice(0);
    let copyBombArray = bombArray.slice(0);
    let bombNumber = copyBombArray.shift();
    let bombPower = copyBombArray.shift();

    for (let i = 0; i < coppyBombNumber.length; i++) {
        if (coppyBombNumber[i] === bombNumber) {
            let bombIndex = coppyBombNumber.indexOf(bombNumber);
            let startIndex = Math.max(bombIndex - bombPower, 0);
            coppyBombNumber.splice(bombIndex, bombPower + 1);
            coppyBombNumber.splice(startIndex, bombPower);
            i = 0;
        }
    }

    return coppyBombNumber.reduce((acc, curr) => {
        acc += curr
        return acc;
    }, 0);
}

console.log(bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [3, 1]));
