const solve = require('./01.subSums');
const { assert, expect } = require('chai');

describe('Sub-sum calculator', () => {
    it('Should calculate sub-sum when end index is larger than length', () => {
        // Arrange
        const startIndex = 3;
        const endIndex = 300;
        const expectedSum = 150;
        const numbers = [10, 20, 30, 40, 50, 60];

        // Act
        let actualSum = solve(numbers, startIndex, endIndex);

        // Assert
        assert.equal(expectedSum, actualSum)
    });

    it('Should calculate sub-sum when start index is lower than 0', () => {
        // Arrange
        const startIndex = -100;
        const endIndex = 2;
        const expectedSum = 60;
        const numbers = [10, 20, 30, 40, 50, 60];

        // Act
        let actualSum = solve(numbers, startIndex, endIndex);

        // Assert
        //assert.equal(expectedSum, actualSum)
        expect(actualSum).to.equal(expectedSum);
    });

    it('Should return NAN when non array is provided for first argument', () => {
        assert.equal(Number.isNaN(solve(10, 0, 1)), true);
        assert.equal(Number.isNaN(solve(true, 0, 1)), true);
        assert.equal(Number.isNaN(solve({}, 0, 1)), true);
        assert.equal(Number.isNaN(solve(null, 0, 1)), true);
        assert.equal(Number.isNaN(solve(undefined, 0, 1)), true);
        assert.equal(Number.isNaN(solve('10', 0, 1)), true);
    });
});
