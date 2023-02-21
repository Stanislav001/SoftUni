class WineSelection {
    constructor(space) {
        this.space = space;
        this.wines = [];
        this.bill = 0;
    }

    reserveABottle(wineName, wineType, price) {
        if (this.space <= 0) {
            throw new Error('Not enough space in the cellar.');
        }

        const addedItem = {
            wineName,
            wineType,
            price: Number(price),
            paid: false,
        }
        this.wines.push(addedItem);
        this.space -= 1;

        return `You reserved a bottle of ${wineName} ${wineType} wine.`;
    }

    payWineBottle(wineName, price) {
        let indexOfWine = this.wines.findIndex(wine => wine.wineName === wineName);

        if (indexOfWine === -1) {
            throw new Error(`${wineName} is not in the cellar.`);
        }
        if (this.wines[indexOfWine].paid) {
            throw new Error(`${wineName} has already been paid.`);
        }

        this.wines[indexOfWine].paid = true;
        this.bill += Number(price);

        return `You bought a ${wineName} for a ${price}$.`;
    }

    openBottle(wineName) {
        let indexOfWine = this.wines.findIndex(wine => wine.wineName === wineName);

        if (indexOfWine === -1) {
            throw new Error("The wine, you're looking for, is not found.");
        }
        if (!this.wines[indexOfWine].paid) {
            throw new Error(`${wineName} need to be paid before open the bottle.`);
        }

        this.wines = this.wines.filter(wine => wine.wineName !== wineName);

        return `You drank a bottle of ${wineName}.`;
    }


    cellarRevision(wineType) {
        if (!wineType) {
            let wineMessage = [];
            let sortedWines = this.wines.sort((a, b) => a.wineName.localeCompare(b.wineName));
            if (this.wines.length > 0) {
                wineMessage = sortedWines.map(wine => `${wine.wineName} > ${wine.wineType} - ${wine.paid ? 'Has Paid' : 'Not Paid'}.`);
            }
            return [
                `You have space for ${this.space} bottles more.`,
                `You paid ${this.bill}$ for the wine.`,
                wineMessage.join('\n')
            ].join('\n');
        } else {
            let filteredWines = this.wines.filter(wine => wine.wineType === wineType);

            if (filteredWines.length <= 0) {
                throw new Error(`There is no ${wineType} in the cellar.`);
            }

            let message = filteredWines.map(wine => `${wine.wineName} > ${wine.wineType} - ${wine.paid ? 'Has Paid' : 'Not Paid'}.`);
            return [
                message.join('\n')
            ].join('\n');
        }
    }
}

const selection = new WineSelection(2)
selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120);
selection.payWineBottle('Sauvignon Blanc Marlborough', 50);
console.log(selection.openBottle('Sauvignon Blanc Marlborough'));
