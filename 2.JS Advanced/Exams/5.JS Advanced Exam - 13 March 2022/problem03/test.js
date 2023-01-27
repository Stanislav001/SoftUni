const { expect } = require('chai');
const { rentCar } = require('./rentCar');

describe("Rent Car", () => {
    describe("searchCar", () => {
        it('Happy Path', () => {
            expect(rentCar.searchCar(["Volkswagen", "BMW", "Audi"], 'Audi')).to.equal('There is 1 car of model Audi in the catalog!');
            expect(rentCar.searchCar(["Volkswagen", "BMW", "Audi", "Audi"], 'Audi')).to.equal('There is 2 car of model Audi in the catalog!');
        });

        it('No models in the catalog', () => {
            expect(() => rentCar.searchCar(["Volkswagen", "BMW", "Audi"], 'Mercedes')).throw();
        });

        it('Invalid argument', () => {
            expect(() => rentCar.searchCar(["Volkswagen", "BMW", "Audi"], 5)).throw();
            expect(() => rentCar.searchCar('["Volkswagen", "BMW", "Audi"]', 'BMW')).throw();
            expect(() => rentCar.searchCar('["Volkswagen", "BMW", "Audi"]', 5)).throw();
        });
    });

    describe("calculatePriceOfCar", () => {
        it('Happy Path', () => {
            expect(rentCar.calculatePriceOfCar("Volkswagen", 2)).to.equal("You choose Volkswagen and it will cost $40!");
        });

        it('No models in the catalog', () => {
            expect(() => rentCar.calculatePriceOfCar("Mazda", 2)).throw();
        });

        it('Invalid argument', () => {
            expect(() => rentCar.calculatePriceOfCar(["Volkswagen", "BMW", "Audi"], 5)).throw();
            expect(() => rentCar.calculatePriceOfCar(["Volkswagen", "BMW", "Audi"], '5')).throw();
            expect(() => rentCar.calculatePriceOfCar('Volkswagen', '5')).throw();
        });
    });

    describe("checkBudget", () => {
        it('Happy Path', () => {
            expect(rentCar.checkBudget(20, 2, 40)).to.equal('You rent a car!');
            expect(rentCar.checkBudget(20, 2, 60)).to.equal('You rent a car!');
        });

        it('Not enough budget', () => {
            expect(rentCar.checkBudget(20, 2, 30)).to.equal('You need a bigger budget!');
            expect(rentCar.checkBudget(30, 2, 59)).to.equal('You need a bigger budget!');
        });
        
        it('Invalid argument', () => {
            expect(() => rentCar.checkBudget('1', 2, 3)).throw();
            expect(() => rentCar.checkBudget(1, '2', 3)).throw();
            expect(() => rentCar.checkBudget(1, 2, '3')).throw();
            expect(() => rentCar.checkBudget('1', '2', 3)).throw();
            expect(() => rentCar.checkBudget('1', '2', '3')).throw();
        });
    });
});