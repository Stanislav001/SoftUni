class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = { "child": 150, "student": 300, "collegian": 500 };
        this.listOfParticipants = [];
    }

    registerParticipant(name, condition, money) {
        if (!this.priceForTheCamp[condition]) {
            return "Unsuccessful registration at the camp.";
        }

        if (this.listOfParticipants.find(x => x.name === name)) {
            return `The ${name} is already registered at the camp.`;
        }

        if (this.priceForTheCamp[condition] > money) {
            return `The money is not enough to pay the stay at the camp.`;
        }

        const currentParticipant = { name, condition, power: 100, wins: 0 };
        this.listOfParticipants.push(currentParticipant);

        return `The ${name} was successfully registered.`
    }

    unregisterParticipant(name) {
        const existingParticipant = this.listOfParticipants.find(x => x.name === name);
        if (!existingParticipant) {
            return `The ${name} is not registered in the camp.`;
        }
        this.listOfParticipants = this.listOfParticipants.filter(x => x.name !== name);
        return `The ${name} removed successfully.`;
    }

    timeToPlay(typeOfGame, participant1, participant2) {
        const indexOfFirstParticipant = this.listOfParticipants.indexOf(x => x.name === participant1);
        const indexOfSecondParticipant = this.listOfParticipants.indexOf(x => x.name === participant2);

        if (typeOfGame === 'WaterBalloonFights') {
            if (indexOfFirstParticipant === -1 || !indexOfSecondParticipant === -1) {
                return `Invalid entered name/s.`;
            }
            
            if (this.listOfParticipants[indexOfFirstParticipant].condition !== this.listOfParticipants[indexOfSecondParticipant].condition) {
                return `Choose players with equal condition.`;
            }
        }

        if (typeOfGame === 'Battleship') {
            if (indexOfFirstParticipant !== -1) {
                this.listOfParticipants[indexOfFirstParticipant].power += 20;

                return $`The {name} successfully completed the game ${typeOfGame}.`
            }
        }
    }
}

const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));
