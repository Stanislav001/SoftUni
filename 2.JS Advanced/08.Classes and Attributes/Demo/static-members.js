class Cat {
    isHungry = true;
    static legNumber = 4;

    constructor(name) {
        this.name = name;
    }

    makeSound() {
        console.log(`${this.name}: Meao!`);
    }

    static veterinaryInspection(cat) {
        if (cat.isHungry) {
            console.log(`This cat should be fed!!!`);
        } else {
            console.log('This cat is fine!');
        }
    }
}

let cat = new Cat('Rodrigo');
cat.makeSound();

//* Static method
Cat.veterinaryInspection(cat);

//* Static property
console.log(Cat.legNumber);