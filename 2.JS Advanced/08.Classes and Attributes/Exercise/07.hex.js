class Hex {
    constructor(value) {
        this.value = value;
        this.hexValue = '0x';
    }

    valueOf() {
        return this.value;
    }

    toString() {
        return this.hexValue + this.value.toString(16).toUpperCase();
    }

    plus(param) {
        let currentValue = 0;

        if (typeof (param) == "number") {
            currentValue = this.value + param;
        } else if (typeof (param) == "object") {
            currentValue = this.value + param.value;
        }

        return new Hex(currentValue);
    }

    minus(param) {
        let currentValue = 0;

        if (typeof (param) == "number") {
            currentValue = this.value - param;
        } else if (typeof (param) == "object") {
            currentValue = this.value - param.value;
        }

        return new Hex(currentValue);
    }

    parse(string) {
        return parseInt(string, 16);
    }
}

let FF = new Hex(255);
console.log(FF.toString());
FF.valueOf() + 1 == 256;

let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString() === '0xF');
console.log(FF.parse('AAA'));