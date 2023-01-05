class Garden {
    constructor(spaceAvailable) {
        this.spaceAvailable = Number(spaceAvailable);
        this.plants = [];
        this.storage = [];
    }

    addPlant(plantName, spaceRequired) {
        if (this.spaceAvailable < spaceRequired) {
            throw new Error("Not enough space in the garden.");
        }
        const currentPlant = {
            plantName,
            spaceRequired,
            ripe: false,
            quantity: 0,
        }
        this.spaceAvailable -= Number(spaceRequired);
        this.plants.push(currentPlant);

        return `The ${plantName} has been successfully planted in the garden.`;
    }

    ripenPlant(plantName, quantity) {
        const plant = this.plants.find(x => x.plantName === plantName);

        if (!plant) {
            throw new Error(`There is no ${plantName} in the garden.`);
        }
        if (plant.ripe) {
            throw new Error(`The ${plantName} is already ripe.`);
        }
        if (quantity <= 0) {
            throw new Error("The quantity cannot be zero or negative.");
        }
        if (quantity === 1) {
            plant.ripe = true;
            plant.quantity += quantity;
            return `${quantity} ${plantName} has successfully ripened.`;
        }
        if (quantity > 1) {
            plant.ripe = true;
            plant.quantity += quantity;
            return `${quantity} ${plantName}s have successfully ripened.`;
        }
    }

    harvestPlant(plantName) {
        const plant = this.plants.find(x => x.plantName === plantName);

        if (!plant) {
            throw new Error(`There is no ${plantName} in the garden.`);
        }
        if (plant.ripe === false) {
            throw new Error(`The ${plantName} cannot be harvested before it is ripe.`);
        }
        this.plants.filter(x => x.plantName !== plant.plantName);
        this.spaceAvailable += Number(plant.spaceRequired);
        this.storage.push(plant);

        return `The ${plantName} has been successfully harvested.`
    }

    generateReport() {
        const plantNames = this.plants.map(p => p.plantName).sort((a, b) => a.localeCompare(b));
        const plantsString = `Plants in the garden: ${plantNames.join(', ')}`;

        let storageString = 'Plants in storage: The storage is empty.';

        if (this.storage.length > 0) {
            const storageNamesAndQuantity = this.storage.map(p => `${p.plantName} (${p.quantity})`);
            storageString = `Plants in storage: ${storageNamesAndQuantity.join(', ')}`;
        }

        return [
            `The garden has ${Number(this.spaceAvailable)} free space left.`,
            plantsString,
            storageString
        ].join('\n');
    }
}

const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('raspberry', 10));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.harvestPlant('orange'));
console.log(myGarden.generateReport());

