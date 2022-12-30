const isOddOrEven = require('./02.evenOrOdd');
const { assert } = require('chai');

describe('Is odd or even function tests: ', () => {
    it('should return undefined if parameter is not a string', () => {
        assert.equal(isOddOrEven(undefined), undefined);
        assert.equal(isOddOrEven(true), undefined);
        assert.equal(isOddOrEven(10), undefined);
        assert.equal(isOddOrEven([]), undefined);
        assert.equal(isOddOrEven({}), undefined);
    });

    it ('should return odd or event when parameter is a string', () => {
        assert.equal(isOddOrEven('test string'), 'odd' || 'even');
    });

    it('should return odd if parameter is string with odd length', () => {
        assert.equal(isOddOrEven('str'), "odd");
    });

    it('should return even if parameter is string with even length', () => {
        assert.equal(isOddOrEven('st'), "even");
    });
});