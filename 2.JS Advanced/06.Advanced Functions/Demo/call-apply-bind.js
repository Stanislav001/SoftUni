//* Call
function introduce(firstName, lastName) {
    console.log(`Hello ${firstName} ${lastName}, my name is ${this.name}`);
}

introduce('Ivan', 'Ivanov'); //* Global invocation

let person = {
    name: 'Pesho',
}

//introduce.call({name: 'Gosho'}, 'Ivan', 'Ivanov');
introduce.call(person, 'Ivan', 'Ivanov'); //* Invoke using call

//* Apply
introduce.apply(person, ['Ivan', 'Ivanov']); //* Invoke using apply

//* Bind
let otherPerson = {
    name: 'Gosho'
};
const otherPersonIntroduceFunction = introduce.bind(otherPerson, 'Kris', 'Ivanov');
otherPersonIntroduceFunction();