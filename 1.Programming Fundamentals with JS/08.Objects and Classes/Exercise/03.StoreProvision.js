function solve(stock, orderedProducts) {
    let storedProducts = {};

    for (let index = 0; index < stock.length; index += 2) {
        const currentProduct = stock[index];
        storedProducts[currentProduct] = Number(stock[index + 1]);
    }

    for (let index = 0; index < orderedProducts.length; index += 2) {
        const currentProduct = orderedProducts[index];
        if (!storedProducts.hasOwnProperty(currentProduct)) {
            storedProducts[currentProduct] = 0;
        }
        storedProducts[currentProduct] += Number(orderedProducts[index + 1]);
    }

    for (const productKey in storedProducts) {
        console.log(`${productKey} -> ${storedProducts[productKey]}`);
    }
}

solve(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'], ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']);