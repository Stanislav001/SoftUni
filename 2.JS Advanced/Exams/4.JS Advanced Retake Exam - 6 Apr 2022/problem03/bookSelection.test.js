const bookSelection = require('./bookSelection');
const { assert, expect } = require('chai');

describe('Book Selection Tests', () => {

    describe('isGenreSuitable function tests', () => {
        it('Special input test', () => {
            expect(bookSelection.isGenreSuitable('Thriller', 12)).to.equal('Books with Thriller genre are not suitable for kids at 12 age');
            expect(bookSelection.isGenreSuitable('Thriller', 11)).to.equal('Books with Thriller genre are not suitable for kids at 11 age');
            expect(bookSelection.isGenreSuitable('Horror', 12)).to.equal('Books with Horror genre are not suitable for kids at 12 age');
            expect(bookSelection.isGenreSuitable('Horror', 11)).to.equal('Books with Horror genre are not suitable for kids at 11 age');
        });

        it('Not special input test', () => {
            expect(bookSelection.isGenreSuitable('Test', 15)).to.equal('Those books are suitable');
            expect(bookSelection.isGenreSuitable('Test', 12)).to.equal('Those books are suitable');
            expect(bookSelection.isGenreSuitable('Thriller', 15)).to.equal('Those books are suitable');
            expect(bookSelection.isGenreSuitable('Horror', 15)).to.equal('Those books are suitable');
        });
    });

    describe('isItAffordable function tests', () => {
        it('Invalid input', () => {
            expect(() => bookSelection.isItAffordable('10', '10')).to.throw('Invalid input');
            expect(() => bookSelection.isItAffordable('10', 10)).to.throw('Invalid input');
            expect(() => bookSelection.isItAffordable(10, '10')).to.throw('Invalid input');
            expect(() => bookSelection.isItAffordable({}, [])).to.throw('Invalid input');
        });

        it('Result is lower than 0', () => {
            expect(bookSelection.isItAffordable(10, 0)).to.equal(`You don't have enough money`);
        });

        it('Check calculate result', () => {
            expect(bookSelection.isItAffordable(10, 1000)).to.equal(`Book bought. You have 990$ left`);
            expect(bookSelection.isItAffordable(0, 0)).to.equal(`Book bought. You have 0$ left`);
        });

    });

    describe('suitableTitles function tests', () => {
        it('Invalid input', () => {
            expect(() => bookSelection.suitableTitles('10', [])).to.throw('Invalid input');
            expect(() => bookSelection.isItAffordable([], 10)).to.throw('Invalid input');
            expect(() => bookSelection.isItAffordable(10, '10')).to.throw('Invalid input');
            expect(() => bookSelection.isItAffordable({}, [])).to.throw('Invalid input');
        });

        it('Test functionality of function', () => {
            expect(bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" }], 'Thriller')).to.eql(['The Da Vinci Code']);
            expect(bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" }], 'The Da Vinci Code')).to.eql([]);
            
        });
    });
});