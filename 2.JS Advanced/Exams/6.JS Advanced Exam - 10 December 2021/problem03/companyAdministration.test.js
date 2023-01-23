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

    

});