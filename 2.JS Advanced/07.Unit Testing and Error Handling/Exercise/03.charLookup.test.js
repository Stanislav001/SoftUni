const lookupChar = require('./03.charLookup');
const { assert } = require('chai');

describe('lookupChar function tests: ', () => {
    it('should return undefined when first arg is not a string and second is not a number', () => {
        assert.equal(lookupChar(2, 3), undefined);
        assert.equal(lookupChar(10, ''), undefined);
        assert.equal(lookupChar([], '200'), undefined);
        assert.equal(lookupChar(true, ''), undefined);
        assert.equal(lookupChar('test', '2'), undefined);
        assert.equal(lookupChar(undefined, null), undefined);
        assert.equal(lookupChar('test', 2.5), undefined);
    });

    it('should return Incorrect index when index bigger or equal to the string length or a negative number', () => {
        assert.equal(lookupChar('world', 6), 'Incorrect index');
        assert.equal(lookupChar('hi', -2), 'Incorrect index');
    });

    it('should return the character at the specified index in the string', () => {
        assert.equal(lookupChar('hi', 1), 'i');
        assert.equal(lookupChar('Hi', 0), 'H');
    });
});