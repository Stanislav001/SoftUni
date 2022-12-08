function solve(input) {
    let cats = [];
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        meow() {
            console.log(`${this.name}, ${this.age} says Meow`);
        }
    }

    for (const row of input) {
        const tokens = row.split(' ');
        const currentCat = new Cat(tokens[0], Number(tokens[1]));
        cats.push(currentCat);
    }

    for (const cat of cats) {
        cat.meow();
    }
}

solve(['Mellow 2', 'Tom 5']);
console.log('---');
solve(['Candy 1', 'Poppy 3', 'Nyx 2']);