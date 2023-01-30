class OnlineShop {
    constructor(warehouseSpace) {
        this.warehouseSpace = warehouseSpace;
        this.products = [];
        this.sales = [];
    }

    loadingStore(product, quantity, spaceRequired) {
        if (this.warehouseSpace < Number(spaceRequired)) {
            throw new Error("Not enough space in the warehouse.");
        }

        this.warehouseSpace -= Number(spaceRequired);
        const currentProduct = { product, quantity };
        this.products.push(currentProduct);

        return `The ${product} has been successfully delivered in the warehouse.`;
    }

    quantityCheck(product, minimalQuantity) {
        let indexOfProduct = this.products.findIndex(element => element.product === product);

        if (Number(minimalQuantity) < 0) {
            throw new Error("The quantity cannot be zero or negative.");
        }
        if (indexOfProduct === -1) {
            throw new Error(`There is no ${product} in the warehouse.`);
        }

        if (this.products[indexOfProduct].quantity > minimalQuantity) {
            this.products[indexOfProduct].quantity = minimalQuantity;
            return `You have enough from product ${product}.`;
        } else {
            const difference = minimalQuantity - this.products[indexOfProduct].quantity;
            this.products[indexOfProduct].quantity += difference;
            return `You added ${difference} more from the ${product} products.`
        }
    }

    sellProduct(product) {
        let indexOfProduct = this.products.findIndex(element => element.product === product);

        if (indexOfProduct === -1) {
            throw new Error(`There is no ${product} in the warehouse.`);
        }

        this.products[indexOfProduct].quantity -= 1;
        this.sales.push({ product, quantity: 1 });

        return `The ${product} has been successfully sold.`;
    }

    revision() {
        const sellItems = this.sales.length;

        if (sellItems === 0) {
            throw new Error('There are no sales today!');
        }

        let sellMessage = `You sold ${sellItems} products today!\n`;

        let productsMessage = `Products in the warehouse:\n`;

        this.products.forEach(element => {
            productsMessage += `${element.product}-${element.quantity} more left\n`;
        });

        const result = sellMessage + productsMessage;
        return result;
    }
}

const myOnlineShop = new OnlineShop(500)
console.log(myOnlineShop.loadingStore('headphones', 10, 200));
console.log(myOnlineShop.loadingStore('laptop', 5, 200));

console.log(myOnlineShop.quantityCheck('headphones', 1));
console.log(myOnlineShop.quantityCheck('laptop', 10));

console.log(myOnlineShop.sellProduct('headphones'));
console.log(myOnlineShop.sellProduct('laptop'));
console.log(myOnlineShop.revision());