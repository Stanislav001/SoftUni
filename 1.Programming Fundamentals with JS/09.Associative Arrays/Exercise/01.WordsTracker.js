function solve(array) {
    let words = array.shift().split(' ');
    let result = {};

    for (const word of words) {
        result[word] = 0;
    }

    for (const word of array) {
        if (result.hasOwnProperty(word)) {
            result[word]++;
        }
    }

    const sortedArray = Object.entries(result);
    sortedArray.sort((kvpA, kvpB) => kvpB[1] - kvpA[1]);

    for (const row of sortedArray) {
        console.log(`${row[0]} - ${row[1]}`);
    }
}

solve(['this sentence', 'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task']);