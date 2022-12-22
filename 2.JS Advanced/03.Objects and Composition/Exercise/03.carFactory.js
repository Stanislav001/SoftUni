function carFactory(carObject) {
    let factoryStorage = {
        engine: {
            'smallEngine': { power: 90, volume: 1800 },
            'normalEngine': { power: 120, volume: 2400 },
            'monsterEngine': { power: 200, volume: 3500 },
        },
        carriege: {
            hatchback: { type: 'hatchback', color: ''},
            coupe: { type: 'coupe', color: '' },
        },
        getEngine(power) {
            for (const eng in this.engine) {
                if (this.engine[eng].power >= power) {
                    return this.engine[eng];
                }
            }
        },
        getCarriege(type, color) {
            let result = this.carriege[type];
            carObject.color = color;
            return result;
        },
        getWheels(size) {
            let wheels = new Array(4);
            if (size % 2 == 0) {
                size -= 1;
            }
            wheels.fill(size);
            return wheels;
        },
    }

    return {
        model: carObject.model,
        engine: factoryStorage.getEngine(carObject.power),
        carriage: factoryStorage.getCarriege(carObject.carriage, carObject.color),
        wheels: factoryStorage.getWheels(carObject.wheelsize),
    }
}

console.log(carFactory({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 }
));