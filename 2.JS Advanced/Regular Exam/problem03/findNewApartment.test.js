const { expect } = require('chai');
const findNewApartment = require('./findApartment');

describe('Find New Apartment Functions Tests', () => {
    describe('Is Good Location function test', () => {
        it('Test different cities of Sofia, Varna and Plovdiv', () => {
            expect(findNewApartment.isGoodLocation('Isperih', true)).to.equal('This location is not suitable for you.');
            expect(findNewApartment.isGoodLocation('Isperih', false)).to.equal('This location is not suitable for you.');
            expect(findNewApartment.isGoodLocation('Veliko Tarnovo', true)).to.equal('This location is not suitable for you.');
            expect(findNewApartment.isGoodLocation('Veliko Tarnovo', false)).to.equal('This location is not suitable for you.');
        });
        it('Test with false value for second param', () => {
            expect(findNewApartment.isGoodLocation('Sofia', false)).to.equal('There is no public transport in area.');
            expect(findNewApartment.isGoodLocation('Plovdiv', false)).to.equal('There is no public transport in area.');
            expect(findNewApartment.isGoodLocation('Varna', false)).to.equal('There is no public transport in area.');
        });
        it('Test with true value for second param', () => {
            expect(findNewApartment.isGoodLocation('Sofia', true)).to.equal('You can go on home tour!');
            expect(findNewApartment.isGoodLocation('Plovdiv', true)).to.equal('You can go on home tour!');
            expect(findNewApartment.isGoodLocation('Varna', true)).to.equal('You can go on home tour!');
        });
        it('Test with invalid params', () => {
            expect(() => { findNewApartment.isGoodLocation(true, 'Varna') }).to.throw('Invalid input!');
            expect(() => { findNewApartment.isGoodLocation(true, true) }).to.throw('Invalid input!');
            expect(() => { findNewApartment.isGoodLocation('Varna', 10) }).to.throw('Invalid input!');
            expect(() => { findNewApartment.isGoodLocation('Varna', '10') }).to.throw('Invalid input!');
            expect(() => { findNewApartment.isGoodLocation({}, []) }).to.throw('Invalid input!');
            expect(() => { findNewApartment.isGoodLocation([], {}) }).to.throw('Invalid input!');
        });
    });

    describe('Is Large Enough function test', () => {
        it('Test with valid params', () => {
            expect(findNewApartment.isLargeEnough([40, 50, 60], 60)).to.equal('60');
            expect(findNewApartment.isLargeEnough([40, 50, 60], 30)).to.equal('40, 50, 60');
            expect(findNewApartment.isLargeEnough([40, 50, 60], 0)).to.equal('40, 50, 60');
            expect(findNewApartment.isLargeEnough([40, 50, 60], 0)).to.equal('40, 50, 60');
            expect(findNewApartment.isLargeEnough([40, 50, 60], 100)).to.equal('');
            expect(findNewApartment.isLargeEnough([40, 50, 60], -100)).to.equal('40, 50, 60');
            expect(findNewApartment.isLargeEnough([40, 50, 60], -1)).to.equal('40, 50, 60');
        });

        it('Test with invalid params', () => {
            expect(() => { findNewApartment.isLargeEnough([], 10) }).to.throw('Invalid input!');
            expect(() => { findNewApartment.isLargeEnough([], '10') }).to.throw('Invalid input!');
            expect(() => { findNewApartment.isLargeEnough('10', '10') }).to.throw('Invalid input!');
            expect(() => { findNewApartment.isLargeEnough('10', 10) }).to.throw('Invalid input!');
            expect(() => { findNewApartment.isLargeEnough(false, {}) }).to.throw('Invalid input!');
        });
    });

    describe('Is It Affordable', () => {
        it('Test with valid params', () => {
            expect(findNewApartment.isItAffordable(1000, 10000)).to.equal('You can afford this home!');
            expect(findNewApartment.isItAffordable(10000, 1000)).to.equal("You don't have enough money for this house!");
        });
        it('Test with invalid params', () => {
            expect(() => { findNewApartment.isItAffordable(-1000, 10000) }).to.throw('Invalid input!');
            expect(() => { findNewApartment.isItAffordable(1000, -10000) }).to.throw('Invalid input!');
            expect(() => { findNewApartment.isItAffordable(0, 10000) }).to.throw('Invalid input!');
            expect(() => { findNewApartment.isItAffordable(10000, 0) }).to.throw('Invalid input!');
            expect(() => { findNewApartment.isItAffordable(-10000, -100000) }).to.throw('Invalid input!');
        });
    });
});