class Circle {
    //* Private property
    #pi = Math.PI;

    constructor(radius) {
        this.radius = radius;
        this._perimeter = 2 * this.#pi * radius;
    }

    get area() {
        return (this.#pi * this.radius ** 2).toFixed(2);
    }

    //* Getter of diameter property
    get diameter() {
        return this.radius * 2;
    }

    //* Setter of diameter property
    set diameter(value) {
        if (value < 0) {
            throw new Error('Diameter cannot be less than 0!');
        }
        this.radius = value / 2;
    }

    get perimeter() {
        return this._perimeter;
    }

    set perimeter(value) {
        if (value < 0) {
            throw new Error('Perimeter cannot be less than 0!');
        }
        this._perimeter = value;
    }
    
    //* Private method syntax
    #privateMethod() {

    }
}

let circle = new Circle(2);
console.log(circle.area);

circle.radius = 3;
console.log(circle.area);

circle.diameter = 10;
console.log(circle.radius);
console.log(circle.area);
