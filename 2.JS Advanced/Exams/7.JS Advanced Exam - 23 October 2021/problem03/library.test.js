const library = require('./library');
const { assert, expect } = require('chai');

describe('Choose Your Car Functions Tests', () => {
    describe('calcPriceOfBook function tests', () => {
        it('Test invalid input result', () => {
            expect(() => { library.calcPriceOfBook('Harry Potter', '20') }).to.throw('Invalid input');
            expect(() => { library.calcPriceOfBook(20, 'Harry Potter') }).to.throw('Invalid input');
            expect(() => { library.calcPriceOfBook(10, 20) }).to.throw('Invalid input');
        });

        it('Test calculation logic of function', () => {
            expect(library.calcPriceOfBook('Harry Potter', 2000)).to.equal('Price of Harry Potter is 20.00');
            expect(library.calcPriceOfBook('Harry Potter', 2010)).to.equal('Price of Harry Potter is 20.00');
            expect(library.calcPriceOfBook('Harry Potter', 1980)).to.equal('Price of Harry Potter is 10.00');
            expect(library.calcPriceOfBook('Harry Potter', 1780)).to.equal('Price of Harry Potter is 10.00');
        });
    });

    describe('findBook function tests', () => {
        it('Test book is existing', () => {
            expect(library.findBook(["Troy", "Life Style", "Torronto"], 'Torronto')).to.equal('We found the book you want.');
            expect(library.findBook(["Troy", "Life Style", "Torronto"], 'Troy')).to.equal('We found the book you want.');
            expect(library.findBook(["Troy", "Life Style", "Torronto"], 'Harry Potter')).to.equal('The book you are looking for is not here!');
        });

        it('Test with invalid input', () => {
            expect(() => { library.findBook([], 'Torronto') }).to.throw('No books currently available');
        })
    });

    describe('arrangeTheBooks function tests', () => {
        it('Tests with invalid input', () => {
            expect(() => { library.arrangeTheBooks(2.5) }).to.throw('Invalid input');
            expect(() => { library.arrangeTheBooks(-2) }).to.throw('Invalid input');
            expect(() => { library.arrangeTheBooks(-2.5) }).to.throw('Invalid input');
            expect(() => { library.arrangeTheBooks('2') }).to.throw('Invalid input');

        });

        it('Test with valid input', () => {
            expect(library.arrangeTheBooks(5)).to.equal('Great job, the books are arranged.');
            expect(library.arrangeTheBooks(4)).to.equal('Great job, the books are arranged.');
            expect(library.arrangeTheBooks(8)).to.equal('Great job, the books are arranged.');
            expect(library.arrangeTheBooks(40)).to.equal('Great job, the books are arranged.');
            expect(library.arrangeTheBooks(41)).to.equal('Insufficient space, more shelves need to be purchased.');
            expect(library.arrangeTheBooks(45)).to.equal('Insufficient space, more shelves need to be purchased.');
            expect(library.arrangeTheBooks(160)).to.equal('Insufficient space, more shelves need to be purchased.');
        });
    });
});