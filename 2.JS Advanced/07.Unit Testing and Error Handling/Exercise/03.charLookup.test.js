const lookupChar = require('./03.charLookup');
const { expect } = require('chai');

describe('Look up for a char and return it\'s index', () => {
    it('Should return undefined if the first param is not a string', () => {
        expect(lookupChar(2, 3)).to.be.undefined;
    });

    it('Should return undefined if the passed index is not a number', () => {
        expect(lookupChar('world', '2')).to.be.undefined;
    });

    it('Should return undefined if both params are incorrect type', () => {
        expect(lookupChar([], '2')).to.be.undefined;
    });

    it('Should return Incorrect index if the index is lower than 0', () => {
        expect(lookupChar('world', -1)).to.equal('Incorrect index');
    });

    it('Should return Incorrect index if the index is higher than the passed string length', () => {
        expect(lookupChar('world', 6)).to.equal('Incorrect index');
    });

    it('Should return d', () => {
        expect(lookupChar('world', 5.5)).to.be.undefined;
    });

    it('Should return d', () => {
        expect(lookupChar('world', 4)).to.equal('d');
    });

    it('Should return l', () => {
        expect(lookupChar('world', 3)).to.equal('l');
    });
});