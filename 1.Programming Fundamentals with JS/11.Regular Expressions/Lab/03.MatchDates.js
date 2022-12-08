function solve(input) {
    let text = input.shift();
    let regex = /\b(\d{2})([-.\/])([A-Z][a-z]{2})\2(\d{4})\b/g;
    let result = text.matchAll(regex);

    for (const element of result) {
        console.log(`Day: ${element[1]}, Month: ${element[3]}, Year: ${element[4]}`);
    }
}

solve(['13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016']);