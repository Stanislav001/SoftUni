class Circle {
    constructor(radius) {
        this.radius = radius
    }

    get radius() {
        return this._radius;
    }

    set radius(radius) {
        this._radius = radius;
    }

    get diameter() {
        return this._radius * 2;
    }

    set diameter(value) {
        this._radius = value / 2;
    }

    get area() {
        return Math.PI * Math.pow(this._radius, 2);
    }
}

let circle = new Circle(2);
console.log(`Radius: ${circle.radius}`);
console.log(`Diameter: ${circle.diameter}`);
console.log(`Area: ${circle.area}`);

circle.diameter = 5;
console.log(`Radius: ${circle.radius}`);
console.log(`Diameter: ${circle.diameter}`);
console.log(`Area: ${circle.area}`);