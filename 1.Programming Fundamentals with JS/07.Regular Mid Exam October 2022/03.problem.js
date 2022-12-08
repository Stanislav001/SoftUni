function solve(input) {
    let books = input.shift().split('&');
    let currentCommand = input.shift();

    while (currentCommand !== 'Done') {
        const tokens = currentCommand.split(' | ');
        const commandType = tokens[0];
        const firstBook = tokens[1];
        const secondBook = tokens[2];
        const isExist = books.includes(firstBook);

        if (commandType === 'Add Book') {
            if (!isExist) {
                books.unshift(firstBook);
            }
        }
        if (commandType === 'Take Book') {
            if (isExist) {
                books = books.filter(x => x !== firstBook);
            }
        }
        if (commandType === 'Swap Books') {
            const checkSecondBookIsExist = books.includes(secondBook);
            if (isExist && checkSecondBookIsExist) {
                const indexOfFirstBook = books.indexOf(firstBook);
                const indexOfSecondBook = books.indexOf(secondBook);
                const swapValue = books[indexOfFirstBook];
                books[indexOfFirstBook] = books[indexOfSecondBook];
                books[indexOfSecondBook] = swapValue;
            }
        }
        if (commandType === 'Insert Book') {
            if (!isExist) {
                books.push(firstBook);
            }
        }
        if (commandType === 'Check Book') {
            if (firstBook < books.length) {
                const nameOfBookByIndex = books[firstBook];
                console.log(nameOfBookByIndex);
            }
        }
        currentCommand = input.shift();
    }
    console.log(books.join(', '));
}

solve(["Anna Karenina&Heart of Darkness&Catch-22&The Stranger",
    "Add Book | Catch-22",
    "Swap Books | Anna Karenina | Catch-22",
    "Take Book | David Copperfield",
    "Done"])

