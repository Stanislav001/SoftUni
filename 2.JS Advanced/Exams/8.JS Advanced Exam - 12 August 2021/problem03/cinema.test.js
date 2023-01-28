const cinema = require('./cinema');
const { assert, expect } = require('chai');

describe('Cinema Tests', () => {
    describe('showMovies function tests', () => {
        it('Test with invalid input', () => {
            expect(cinema.showMovies([])).to.equal('There are currently no movies to show.');
            expect(cinema.showMovies('')).to.equal('There are currently no movies to show.');
        });

        it('Test result with valid input', () => {
            expect(cinema.showMovies(['King Kong', 'The Tomorrow War', 'Joker'])).to.equal('King Kong, The Tomorrow War, Joker');
            expect(cinema.showMovies(['King Kong', 'The Tomorrow War'])).to.equal('King Kong, The Tomorrow War');
            expect(cinema.showMovies(['King Kong', 'Joker'])).to.equal('King Kong, Joker');

            expect(cinema.showMovies(['King Kong'])).to.equal('King Kong');
            expect(cinema.showMovies([''])).to.equal('');
        });
    });

    describe('ticketPrice function tests', () => {
        it('Test functionality', () => {
            expect(cinema.ticketPrice('Premiere')).to.equal(12);
            expect(cinema.ticketPrice('Normal')).to.equal(7.5);
            expect(cinema.ticketPrice('Discount')).to.equal(5.5);
            expect(() => { cinema.ticketPrice('Invalid') }).to.throw('Invalid projection type.');
            expect(() => { cinema.ticketPrice('') }).to.throw('Invalid projection type.');
        });
    });

    describe('swapSeatsInHall', () => {
        it('Test functionality', () => {
            expect(cinema.swapSeatsInHall(1, 2)).to.equal('Successful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(2, 1)).to.equal('Successful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(20, 10)).to.equal('Successful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(10, 20)).to.equal('Successful change of seats in the hall.');

            expect(cinema.swapSeatsInHall('a', 'a')).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(1, 'a')).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall('a', 1)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(2, 2)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(2, -2)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(2, 2.5)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(2.5, 2)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(2.5, 2.5)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(21, 2)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(2, 21)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(21, 21)).to.equal('Unsuccessful change of seats in the hall.');
        });
    });
});