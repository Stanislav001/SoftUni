function solve(input) {
    let productList = input.shift().split('!');
    let currentCommand = input.shift();

    while (currentCommand !== 'Go Shopping!') {
        const currentRow = currentCommand.split(' ');
        const commandName = currentRow[0];
        const nameOfProduct = currentRow[1];
        const nameOfNewProduct = currentRow[2];
        const isExist = productList.includes(nameOfProduct);
        switch (commandName) {
            case 'Urgent':
                if (!isExist) {
                    productList.unshift(nameOfProduct);
                }
                break;
            case 'Unnecessary':
                productList = productList.filter(x => x !== nameOfProduct);
                break;
            case 'Correct':
                if (isExist) {
                    let updatedItems = productList.indexOf(nameOfProduct);

                    if (updatedItems > - 1) {
                        productList[updatedItems] = nameOfNewProduct;
                    }
                }
                break;
            case 'Rearrange':
                let removedIndex = productList.indexOf(nameOfProduct);
                if (removedIndex > -1) {
                    productList = productList.filter(x => x !== nameOfProduct);
                    productList.push(nameOfProduct);
                }
                break;
        }
        currentCommand = input.shift();
    }
    console.log(productList.join(', '));
}


solve(["Tomatoes!Potatoes!Bread",
    "Unnecessary Milk",
    "Urgent Tomatoes",
    "Go Shopping!"]);
console.log('---');
solve(["Milk!Pepper!Salt!Water!Banana",
    "Urgent Salt",
    "Unnecessary Grapes",
    "Correct Pepper Onion",
    "Rearrange Grapes",
    "Correct Tomatoes Potatoes",
    "Go Shopping!"]);