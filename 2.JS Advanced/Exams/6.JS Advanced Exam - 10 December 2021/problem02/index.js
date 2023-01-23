class VegetableStore {
    constructor(owner, location) {
        this.owner = owner;
        this.location = location;
        this.availableProducts = [];
    }

    loadingVegetables(vegetables) {
        let addedItems = [];

        for (const vegetable of vegetables) {
            let [type, quantity, price] = vegetable.split(' ');
            quantity = Number(quantity);
            price = Number(price);

            const existingItem = this.availableProducts.find(x => x.type === type);
            if (existingItem) {
                if (existingItem.price < price) {
                    existingItem.price = price;
                }
                existingItem.quantity += quantity;
                this.availableProducts = this.availableProducts.filter(x => x.type !== type);
                this.availableProducts.push(existingItem);
            } else {
                const currentVegetable = { type, quantity, price };
                this.availableProducts.push(currentVegetable);
            }

            if (!addedItems.includes(type)) {
                addedItems.push(type);
            }
        }
        return `Successfully added ${addedItems.join(', ')}`
    }

    buyingVegetables(selectedProducts) {
        let totalPrice = 0;

        for (const vegetable of selectedProducts) {
            const [type, quantity] = vegetable.split(' ');

            let currVegIndex = this.availableProducts.findIndex(v => v.type == type);
            if (currVegIndex == -1) {
                throw new Error(`${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);
            }
            if (quantity > this.availableProducts[currVegIndex].quantity) {
                throw new Error(`The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);
            }

            totalPrice += Number(quantity) * this.availableProducts[currVegIndex].price;
            this.availableProducts[currVegIndex].quantity -= Number(quantity);
        }
        return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`;
    }

    rottingVegetable(type, quantity) {
        let currVegIndex = this.availableProducts.findIndex(v => v.type == type);

        if (currVegIndex == -1) {
            throw new Error(`${type} is not available in the store.`);
        }

        if (Number(quantity) > this.availableProducts[currVegIndex].quantity) {
            this.availableProducts[currVegIndex].quantity = 0;
            return `The entire quantity of the ${type} has been removed.`;
        }

        this.availableProducts[currVegIndex].quantity -= Number(quantity);
        return `Some quantity of the ${type} has been removed.`;
    }

    revision() {
        this.availableProducts.sort((a, b) => a.price - b.price);
        const availableProducts = this.availableProducts.map(p => `${p.type}-${p.quantity}-$${p.price}`);

        return [
            `Available vegetables:`,
            `${availableProducts.join('\n')}`,
            `The owner of the store is ${this.owner}, and the location is ${this.location}.`,
        ].join('\n');
    }
}

let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
console.log(vegStore.revision());