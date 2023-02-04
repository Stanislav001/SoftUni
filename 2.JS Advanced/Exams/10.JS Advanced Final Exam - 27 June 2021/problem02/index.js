class Restaurant {
    constructor(budget) {
        this.budget = budget;
        this.menu = {};
        this.stockProducts = {};
        this.history = [];
    }

    loadProducts(products) {
        let message = '';

        for (const product of products) {
            let [productName, productQuantity, productTotalPrice] = product.split(' ');
            productTotalPrice = Number(productTotalPrice);

            if (productTotalPrice > this.budget) {
                message += `There was not enough money to load ${productQuantity} ${productName}\n`
            } else {
                if (this.stockProducts[productName]) {
                    this.stockProducts[productName] += productQuantity;
                } else {
                    this.stockProducts[productName] = productQuantity;
                }

                message += `Successfully loaded ${productQuantity} ${productName}\n`;
            }
        }
        return message;
    }

    addToMenu(meal, neededProducts, price) {
        for (const product of neededProducts) {
            let [productName, productQuantity] = product.split(' ');

            if (this.menu[productName]) {
                return `The ${meal} is already in the our menu, try something different.\n`;
            } else {
                this.menu[productName] = Number(price);
            }

            if (Object.keys(kitchen.menu).length === 1) {
                return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?\n`;
            }
            if (Object.keys(kitchen.menu).length >= 2 || Object.keys(kitchen.menu).length === 0) {
                return `Great idea! Now with the ${meal} we have ${Object.keys(kitchen.menu).length} meals in the menu, other ideas?\n`
            }
        }
    }

    showTheMenu() {
        let message = ''
        const products = Object.entries(kitchen.menu);

        if (products.length === 0) {
            message = 'Our menu is not ready yet, please come later...'
        } else {
            for (let index = 0; index < products.length; index++) {
                const productObject = products[index];
                message += `${productObject[0]} - $ ${productObject[1]}\n`;
            }
        }
        return message;
    }

    makeTheOrder(mealName) {
        console.log(this.menu);
        let meal = this.menu[mealName];
        
        if (meal) {
            return `There is not ${mealName} yet in our menu, do you want to order something else?`
        } else {
            let price = this.menu[mealName];
            let neededProducts = meal.mProducts;
            let hasAllProducts = true;

            for (const product of neededProducts) {
                let name = product.pName;
                let quantity = product.pQuantity;
                if (this.stockProducts[name] == undefined || this.stockProducts[name] < quantity) {
                    hasAllProducts = false;
                    break;
                } else {
                    this.stockProducts[name] -= quantity;
                    this.budgetMoney += price;
                }
            }

            if (!hasAllProducts) {
                return `For the time being, we cannot complete your order (${mealName}), we are very sorry...`;
            } else {
                return `Your order (${mealName}) will be completed in the next 30 minutes and will cost you ${price}.`
            }
        }

    }

}

let kitchen = new Restaurant(1000);
kitchen.loadProducts(['Yogurt 30 3', 'Honey 50 4', 'Strawberries 20 10', 'Banana 5 1']);
kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99);
console.log(kitchen.makeTheOrder('frozenYogurt'));
