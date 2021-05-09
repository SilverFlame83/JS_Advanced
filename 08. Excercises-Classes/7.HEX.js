class Hex {
    constructor(value) {
        this.number = value;
    }

    valueOf() { return this.number };

    plus(num) { return new Hex(this.number + num) };

    minus(num) { return new Hex(this.number - num) };

    toString() {
        return '0x' + this.number.toString(16).toUpperCase();
    }

    parse(str) { return str.slice(2).toString(10).toUpperCase()}
}

let FF = new Hex(255);
console.log(FF.toString());
FF.valueOf() + 1 == 256;
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString() === '0xF');

