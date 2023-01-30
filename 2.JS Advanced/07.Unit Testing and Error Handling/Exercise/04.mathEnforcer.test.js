const mathEnforcer = require('./04.mathEnforcer');
const { expect } = require('chai');

describe('mathEnforcer', () => {
    describe('Test addFive', () => {
        it('Should return undefined if the passed param is not a number', () => {
            expect(mathEnforcer.addFive('3')).to.be.undefined;
        });

        it('Should return 8', () => {
            expect(mathEnforcer.addFive(3)).to.equal(8);
        });

        it('Should return 2', () => {
            expect(mathEnforcer.addFive(-3)).to.equal(2);
        });

        it('Should return 8.1', () => {
            expect(mathEnforcer.addFive(3.1)).to.closeTo(8.1, 0.01);
        });
    });

    describe('Test subtractTen', () => {
        it('Should return undefined if the passed param is not a number', () => {
            expect(mathEnforcer.subtractTen('3')).to.be.undefined;
        });

        it('Should return -7', () => {
            expect(mathEnforcer.subtractTen(3)).to.equal(-7);
        });

        it('Should return -13', () => {
            expect(mathEnforcer.subtractTen(-3)).to.equal(-13);
        });

        it('Should return -7.1', () => {
            expect(mathEnforcer.subtractTen(3.1)).to.closeTo(-6.9, 0.01);
        });

        it('Should return 2', () => {
            expect(mathEnforcer.subtractTen(12)).to.equal(2);
        });
    });

    describe('Test sum', () => {
        it('Should return undefined if only one param passed', () => {
            expect(mathEnforcer.sum(12)).to.be.undefined;
        });

        it('Should return undefined if no params passed', () => {
            expect(mathEnforcer.sum()).to.be.undefined;
        });

        it('Should return undefined if the first param is not a number', () => {
            expect(mathEnforcer.sum('3', 2)).to.be.undefined;
        });

        it('Should return undefined if the second param is not a number', () => {
            expect(mathEnforcer.sum(3, '2')).to.be.undefined;
        });

        it('Should return 5', () => {
            expect(mathEnforcer.sum(3, 2)).to.equal(5);
        });

        it('Should return -1', () => {
            expect(mathEnforcer.sum(-3, 2)).to.equal(-1);
        });

        it('Should return -8.4', () => {
            expect(mathEnforcer.sum(-3.1, -5.3)).to.closeTo(-8.4, 0.01);
        });

        it('Should return 8.9', () => {
            expect(mathEnforcer.sum(3.1, 5.8)).to.closeTo(8.9, 0.01);
        });

        it('Should return 8.1', () => {
            expect(mathEnforcer.sum(3.1, 5)).to.closeTo(8.1, 0.01);
        });
    });
});