let propertyName = 'ivan ivanov';

let phoneBook = {
    stanislav: '089737454',
    'peter ivanov': '089854453',
    [propertyName] : '039219312', // dynamic property name
}

console.log(phoneBook.stanislav);
console.log(phoneBook['peter ivanov']);
console.log(phoneBook[propertyName]);