const { Schema, model } = require('mongoose');

const carSchema = new Schema({
    name: { type: String, required: [true, 'Car listing mush have a name!'], },
    price: {
        type: Number,
        default: 0,
        min: [0, 'Price cannot be negative!'],
        validate: {
            validator: function (value) {
                return value >= 0;
            },
            message: 'Price cannot be negative!'
        }
    }
});

carSchema.methods.startEngine = function () {
    console.log(`${this.name} goes vroom!`);
}

carSchema.virtual('VAT').get(function () {
    return this.price * 0.2;
});

const Car = model('Car', carSchema);

module.exports = Car;