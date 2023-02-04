const testNumbers = require('./testNumbers');
const { expect } = require('chai');

describe('TestNumbers Tests: ', () => {
    describe('sumNumber function tests: ', () => {
        it('Wrong Parameters Tests', () => {
            expect(testNumbers.sumNumbers('30', '20')).to.equal(undefined);
            expect(testNumbers.sumNumbers('30', 10)).to.equal(undefined);
            expect(testNumbers.sumNumbers(20, '10')).to.equal(undefined);
        });

        it('Valid Parameters Tests', () => {
            expect(testNumbers.sumNumbers(-2, -4)).to.equal('-6.00');
            expect(testNumbers.sumNumbers(2, 4)).to.equal('6.00');
            expect(testNumbers.sumNumbers(0, 0)).to.equal('0.00');
            expect(testNumbers.sumNumbers(0, -1)).to.equal('-1.00');
        })
    });

    describe('numberChecker function tests: ', () => {
        it('Invalid input tests', () => {
            expect(() => { testNumbers.numberChecker('input') }).to.throw('The input is not a number!');
            expect(() => { testNumbers.numberChecker([1, 2, 3]) }).to.throw('The input is not a number!');
            expect(() => { testNumbers.numberChecker({}) }).to.throw('The input is not a number!');
        });

        it('Check functionality of method', () => {
            expect(testNumbers.numberChecker(-1)).to.equal('The number is odd!');
            expect(testNumbers.numberChecker(1)).to.equal('The number is odd!');
            expect(testNumbers.numberChecker(0)).to.equal('The number is even!');
            expect(testNumbers.numberChecker(2)).to.equal('The number is even!');
            expect(testNumbers.numberChecker('2')).to.equal('The number is even!');
            expect(testNumbers.numberChecker('-1')).to.equal('The number is odd!');
        });
    });

    describe('averageSumArray function tests: ', () => {
        it('Test functionality with valid params', () => {
            expect(testNumbers.averageSumArray([1,2,3,4])).to.equal(2.5);
            expect(testNumbers.averageSumArray([1,1,1,1])).to.equal(1);
            expect(testNumbers.averageSumArray([1,2,'3',4])).to.equal(83.5);
        });
    });
});