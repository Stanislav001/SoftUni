const person = {
    firstName: 'Peter',
    lastName: 'Petrov',
    introduce() {
        const getFullName = () => {
            //* Because getFullName is a arrow function this === this from introduce function
            return `${this.firstName} ${this.lastName}`;
        }
        console.log(`Hello, my name is ${getFullName()}`);
    }
}
person.introduce();