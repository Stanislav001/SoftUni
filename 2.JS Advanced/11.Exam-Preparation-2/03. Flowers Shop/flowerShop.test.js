const { expect } = require('chai');
const flowerShop = require('./flowerShop');

describe('flower shop tests', () => {
    describe('calculate price of flowers method tests:', () => {
        it('Tests with wrong params', () => {
            expect(() => { flowerShop.calcPriceOfFlowers(1000, 1000, 2020) }).to.throw('Invalid input!');
            expect(() => { flowerShop.calcPriceOfFlowers(true, '1000', {}) }).to.throw('Invalid input!');
            expect(() => { flowerShop.calcPriceOfFlowers(1000, '1000', 2020) }).to.throw('Invalid input!');
            expect(() => { flowerShop.calcPriceOfFlowers('Rose', '1000', 2020) }).to.throw('Invalid input!');
            expect(() => { flowerShop.calcPriceOfFlowers('Rose', '1000', 2020) }).to.throw('Invalid input!');
            expect(() => { flowerShop.calcPriceOfFlowers('Rose', 1000, '2020') }).to.throw('Invalid input!');
        });
        it('Tests with valid params', () => {
            expect(flowerShop.calcPriceOfFlowers('Rose', 5, 3)).to.equal('You need $15.00 to buy Rose!');
            expect(flowerShop.calcPriceOfFlowers('Rose', 3, 5)).to.equal('You need $15.00 to buy Rose!');
            expect(flowerShop.calcPriceOfFlowers('Rose', -3, 5)).to.equal('You need $-15.00 to buy Rose!');
            expect(flowerShop.calcPriceOfFlowers('Rose', 3, -5)).to.equal('You need $-15.00 to buy Rose!');
            expect(flowerShop.calcPriceOfFlowers('Rose', -3, -5)).to.equal('You need $15.00 to buy Rose!');
            expect(flowerShop.calcPriceOfFlowers('Rose', 1000, 300)).to.equal('You need $300000.00 to buy Rose!');
        });
    });

    describe('check flowers available method tests:', () => {
        it('Tests functionality', () => {
            expect(flowerShop.checkFlowersAvailable('Rose', ["Rose", "Lily", "Orchid"])).to.equal('The Rose are available!');
            expect(flowerShop.checkFlowersAvailable('Test', ["Rose", "Lily", "Orchid"])).to.equal('The Test are sold! You need to purchase more!');
        });
    });

    describe('sell flowers method tests', () => {
        it('Test with wrong params', () => {
            expect(() => { flowerShop.sellFlowers('Test', ["Rose", "Lily", "Orchid"]) }).to.throw('Invalid input!');
            expect(() => { flowerShop.sellFlowers(["Rose", "Lily", "Orchid"]) }).to.throw('Invalid input!');
            expect(() => { flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 'First') }).to.throw('Invalid input!');
            expect(() => { flowerShop.sellFlowers(["Rose", "Lily", 'Orchid'], 2.5) }).to.throw('Invalid input!');
            expect(() => { flowerShop.sellFlowers(["Rose", "Lily", 'Orchid'], 3) }).to.throw('Invalid input!');
        });
        it ('Tests with valid params', () => {
            expect(flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 0)).to.equal('Lily / Orchid');
            expect(flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 1)).to.equal('Rose / Orchid');
            expect(flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 2)).to.equal('Rose / Lily');
        });
    });
});