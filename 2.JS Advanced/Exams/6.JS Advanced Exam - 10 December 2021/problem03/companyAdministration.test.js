const { assert, expect } = require('chai');
const companyAdministration = require('./companyAdministration');

describe('Book Selection Tests', () => {
    describe('hiringEmployee function tests', () => {
        it('position value check', () => {
            expect(() => companyAdministration.hiringEmployee('name', 'position', 10)).to.throw(`We are not looking for workers for this position.`);
            expect(companyAdministration.hiringEmployee("Stas", "Programmer", 5)).to.equal('Stas was successfully hired for the position Programmer.');
            expect(companyAdministration.hiringEmployee("Stas", "Programmer", 3)).to.equal('Stas was successfully hired for the position Programmer.');
            expect(companyAdministration.hiringEmployee("Stas", "Programmer", 2)).to.equal('Stas is not approved for this position.');
        });
    });

    describe('calculateSalary function tests', () => {
        it('invalid input tests', () => {
            expect(() => companyAdministration.calculateSalary('10')).to.throw('Invalid hours');
            expect(() => companyAdministration.calculateSalary(true)).to.throw('Invalid hours');
        });

        it('test calculate functionality', () => {
            expect(companyAdministration.calculateSalary(15)).to.equal(225);
            expect(companyAdministration.calculateSalary(55)).to.equal(825);
            expect(companyAdministration.calculateSalary(160)).to.equal(2400);
            expect(companyAdministration.calculateSalary(165)).to.equal(3475);
        });
    });

    describe('firedEmployee function tests', () => {
        it('Test with invalid parameters', () => {
            expect(() => companyAdministration.firedEmployee({}, 10)).to.throw('Invalid input');
            expect(() => companyAdministration.firedEmployee([], '10')).to.throw('Invalid input');
            expect(() => companyAdministration.firedEmployee([], [])).to.throw('Invalid input');
            expect(() => companyAdministration.firedEmployee(10, 10)).to.throw('Invalid input');
            expect(() => companyAdministration.firedEmployee(['Petar', 'Ivan'], 3)).to.throw('Invalid input');
        });

        it('', () => {
            expect(companyAdministration.firedEmployee(['Petar', 'Ivan', 'George'], 0)).to.equal('Ivan, George');
            expect(companyAdministration.firedEmployee(['Petar', 'Ivan', 'George'], 1)).to.equal('Petar, George');
            expect(companyAdministration.firedEmployee(['Petar', 'Ivan', 'George'], 2)).to.equal('Petar, Ivan');
        });
    });
});