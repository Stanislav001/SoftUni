function getNumber() {
    const randomNumber = Math.random();

    if (randomNumber < 0.5) {
        //throw new Error('The number is too low!');
        throw {
            message: 'The number is too low!',
            type: 'Random number type',
        };
    }
    return Math.floor(randomNumber * 100);
}

function app() {
    try {
        let randomNumber = getNumber();
        console.log(randomNumber);
    } catch (error) {
        console.log(error.message);
    }
}

app();