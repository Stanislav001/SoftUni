function Person(first, last) {
    this.firstName = first;
    this.lastName = last;

    Object.defineProperty(this, "fullName", {
        set: function (value) {
            // set value + validation 
            const [first, last] = value.split(' ');

            if (first != undefined && last != undefined) {
                this.firstName = first;
                this.lastName = last;
            }
        },

        get: function () {
            // calculate and return value 
            return this.firstName + ' ' + this.lastName
        }
    });
}

let person = new Person("Peter", "Ivanov");

console.log(person.fullName);
person.firstName = "George";
console.log(person.fullName);
person.lastName = "Peterson";
console.log(person.fullName);
person.fullName = "Nikola Tesla";
console.log(person.firstName);
console.log(person.lastName); 