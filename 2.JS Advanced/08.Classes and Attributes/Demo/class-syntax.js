class Cat {
    //* set default value to field
    isHungry = true;

    constructor(name) {
        this.name = name;
    }

    makeSound() {
        console.log(`${this.name}: Meao!`);
    }
}

let firstCat = new Cat('Pesho');
firstCat.name = 'Rodrigo';

console.log(firstCat);;

console.log(firstCat instanceof Cat);
console.log(firstCat instanceof Object);
console.log(firstCat instanceof String);

//* Second example
const catNames = ['Rodrigo', 'Teo', 'Teodor', 'Pesho', 'Navcho'];

let cats = catNames.map(x => new Cat(x));

cats.forEach(cat => cat.makeSound());