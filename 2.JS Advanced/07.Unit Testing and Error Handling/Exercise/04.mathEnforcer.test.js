const mathEnforcer = require('./04.mathEnforcer');
const { assert } = require('chai');

describe('mathEnforcer function tests: ', () => {
    describe('addFive function test', () => {
        it('should return undefined when parameter is not a number', () => {
            assert.equal(mathEnforcer.addFive([]), undefined);
            assert.equal(mathEnforcer.addFive({}), undefined);
            assert.equal(mathEnforcer.addFive('5'), undefined);
            assert.equal(mathEnforcer.addFive(null), undefined);
            assert.equal(mathEnforcer.addFive(undefined), undefined);
        });

        it('should return parameter + 5', () => {
            assert.equal(mathEnforcer.addFive(5), 10);
            assert.equal(mathEnforcer.addFive(5.5), 10.5);
        });
    });

    describe('subtractTen function test', () => {
        it('should return undefined when parameter is not a number', () => {
            assert.equal(mathEnforcer.subtractTen([]), undefined);
            assert.equal(mathEnforcer.subtractTen({}), undefined);
            assert.equal(mathEnforcer.subtractTen('5'), undefined);
            assert.equal(mathEnforcer.subtractTen(null), undefined);
            assert.equal(mathEnforcer.subtractTen(undefined), undefined);
        });
       
        it('subtractTen function should return parameter - 10', () => {
            assert.equal(mathEnforcer.subtractTen(10), 0);
            assert.equal(mathEnforcer.subtractTen(15.5), 5.5);
        });
    });

    describe('sum function test', () => { 
        it('should return undefined when parameters is not a numbers', () => {
            assert.equal(mathEnforcer.sum(1), undefined);
            assert.equal(mathEnforcer.sum(), undefined);
            assert.equal(mathEnforcer.sum('test'), undefined);
            assert.equal(mathEnforcer.sum(1, "test"), undefined);
            assert.equal(mathEnforcer.sum('test', 1), undefined);
            assert.equal(mathEnforcer.sum([], 'test'), undefined);
            assert.equal(mathEnforcer.sum({}, true), undefined);
            assert.equal(mathEnforcer.sum(null, undefined), undefined);
            assert.equal(mathEnforcer.sum(undefined, false), undefined);
        });
       
        it('subtractTen function should return parameter - 10', () => {
            assert.equal(mathEnforcer.sum(10, 10), 20);
            assert.equal(mathEnforcer.sum(15.5, 5.5), 21);
        });
    });
});