function solve(input) {
    let regex = /(=|\/)([A-Z][A-Za-z]{2,})\1/g;
    let valids = [];
    let totalPoints = 0;

    let matches = input.matchAll(regex);

    for (const iterator of matches) {
        totalPoints += Number(iterator[2].length);
        valids.push(iterator[2]);
    }

    console.log(`Destinations: ${valids.join(', ')}`);
    console.log(`Travel Points: ${totalPoints}`);
}

solve("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");
console.log('---');
solve('ThisIs some InvalidInput');