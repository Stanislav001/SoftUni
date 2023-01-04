const carService = require('./03. Car Service_Resources');
const { assert, expect } = require('chai');

describe('carService tests', () => {
    describe('isItExpensive function tests: ', () => {
        it('should return "The issue with the car is more severe and it will cost more money" message when input is Engine || Transmission', () => {
            assert.equal(carService.isItExpensive('Engine'), 'The issue with the car is more severe and it will cost more money');
            assert.equal(carService.isItExpensive('Transmission'), 'The issue with the car is more severe and it will cost more money');
        });

        it('Should return "The overall price will be a bit cheaper" message when input is not a Engine || Transmission', () => {
            assert.equal(carService.isItExpensive('Tyre'), 'The overall price will be a bit cheaper');
        });
    });

    describe('discount function test: ', () => {
        it('Invalid input', () => {
            expect(() => carService.discount('10', '10')).to.throw('Invalid input');
            expect(() => carService.discount(10, '10')).to.throw('Invalid input');
            expect(() => carService.discount({}, {})).to.throw('Invalid input');
        });

        it('numberOfParts is smaller or equal  to 2', () => {
            expect(carService.discount(2, 200)).to.equal('You cannot apply a discount');
            expect(carService.discount(1, 200)).to.equal('You cannot apply a discount');
        });

        it('calculate discount', () => {
            expect(carService.discount(3, 500)).to.equal(`Discount applied! You saved 75$`);
        });
    });

    describe('partsToBuy function tests: ', () => {
        it('Invalid input', () => {
            expect(() => carService.partsToBuy('test', 'test')).to.throw('Invalid input');
            expect(() => carService.partsToBuy(10, 'test')).to.throw('Invalid input');
        });

        it('Valid Input and test result', () => {
            const result = 145;
            expect(carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }], (["blowoff valve", "injectors"]))).to.equal(result);
        });
    });
});