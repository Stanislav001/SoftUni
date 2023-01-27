const movieTheater = require('./movieTheater');
const { assert, expect } = require('chai');

describe('movieTheater tests functionality', () => {
    describe('ageRestrictions function tests', () => {
        it('parameter test', () => {
            expect(movieTheater.ageRestrictions('G')).to.equal('All ages admitted to watch the movie');
            expect(movieTheater.ageRestrictions('PG')).to.equal('Parental guidance suggested! Some material may not be suitable for pre-teenagers');
            expect(movieTheater.ageRestrictions('R')).to.equal('Restricted! Under 17 requires accompanying parent or adult guardian');
            expect(movieTheater.ageRestrictions('NC-17')).to.equal('No one under 17 admitted to watch the movie');
            expect(movieTheater.ageRestrictions('TEST')).to.equal('There are no age restrictions for this movie');
        });
    });

    describe('moneySpent functionality test', () => {
        it('Test with wrong input', () => {
            expect(() => movieTheater.moneySpent(10, '10', [])).to.throw('Invalid input');
            expect(() => movieTheater.moneySpent(10, [], '10')).to.throw('Invalid input');
            expect(() => movieTheater.moneySpent('10', [], [])).to.throw('Invalid input');
        });

        it('check calculating functionality', () => {
            expect(movieTheater.moneySpent(10, ['test'], ['test'])).to.equal('The total cost for the purchase with applied discount is 120.00');
            expect(movieTheater.moneySpent(15, ['Nachos, Popcorn'], ['Soda', 'Water'])).to.equal('The total cost for the purchase with applied discount is 183.20');
            expect(movieTheater.moneySpent(16, ['Nachos, Popcorn'], ['Soda', 'Water'])).to.equal('The total cost for the purchase with applied discount is 195.20');
            expect(movieTheater.moneySpent(-16, ['Nachos, Popcorn'], ['Soda', 'Water'])).to.equal('The total cost for the purchase is -236.00');
            expect(movieTheater.moneySpent(1, ['Nachos, Popcorn'], ['Soda', 'Water'])).to.equal('The total cost for the purchase is 19.00');
        });
    });

    describe('reservation functionality test', () => {
        it('Test with wrong input', () => {
            expect(() => movieTheater.reservation(['Nachos, Popcorn'], ['Soda', 'Water'])).to.throw('Invalid input');
            expect(() => movieTheater.reservation('Nachos', 'Soda')).to.throw('Invalid input');
            expect(() => movieTheater.reservation(10, 'Soda')).to.throw('Invalid input');
            expect(() => movieTheater.reservation(20, 30)).to.throw('Invalid input');
        });

        it('Test with correct input', () => {
            expect(movieTheater.reservation([{ rowNumber: 1, freeSeats: 7 }, { rowNumber: 2, freeSeats: 5 }], -1)).to.equal(2);
            expect(movieTheater.reservation([{ rowNumber: 1, freeSeats: 7 }, { rowNumber: 2, freeSeats: 5 }], 7)).to.equal(1);
        });
    });
});