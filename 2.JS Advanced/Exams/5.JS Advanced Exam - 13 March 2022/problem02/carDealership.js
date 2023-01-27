class CarDealership {
    constructor(name) {
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;
    }

    addCar(model, horsepower, price, mileage) {
        if (!model || !Number.isInteger(horsepower) || horsepower < 0 || price < 0 || mileage < 0) {
            throw new Error('Invalid input!');
        }

        this.availableCars.push({ model, horsepower, price, mileage });
        return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`;
    }

    sellCar(model, desiredMileage) {
        const carIndex = this.availableCars.findIndex(c => c.model == model);
        if (carIndex == -1) {
            throw new Error(`${model} was not found!`);
        }

        let car = this.availableCars[carIndex];
        let MileageDiff = car.mileage - desiredMileage;

        if (MileageDiff > 0 && MileageDiff <= 40000) {
            car.price -= car.price * 0.05;
        } else if (MileageDiff > 40000) {
            car.price -= car.price * 0.10;
        }

        this.availableCars.splice(carIndex, 1);
        this.soldCars.push({
            model,
            horsepower: car.horsepower,
            soldPrice: car.price,
        });

        this.totalIncome += car.price;
        return `${model} was sold for ${car.price.toFixed(2)}$`;
    }

    currentCar() {
        if (this.availableCars.length < 1) {
            return "There are no available cars";
        }

        const availableCarsReport = this.availableCars.map(c => `---${c.model} - ${c.horsepower} HP - ${c.mileage.toFixed(2)} km - ${c.price.toFixed(2)}$`);
        return [
            `-Available cars:`,
            availableCarsReport.join('\n')
        ].join('\n');
    }

    salesReport(criteria) {
        if (criteria != 'horsepower' && criteria != 'model') {
            throw new Error('Invalid criteria!');
        }
        if (criteria === 'horsepower') {
            this.soldCars.sort((a, b) => b.horsepower - a.horsepower);
        } else if (criteria === 'model') {
            this.soldCars.sort((a, b) => a.model.localeCompare(b.model));
        }

        const soldCarsReport = this.soldCars.map(c => `---${c.model} - ${c.horsepower} HP - ${c.soldPrice.toFixed(2)}$`);
        return [
            `-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$`,
            `-${this.soldCars.length} cars sold:`,
            soldCarsReport.join('\n')
        ].join('\n');
    }
}