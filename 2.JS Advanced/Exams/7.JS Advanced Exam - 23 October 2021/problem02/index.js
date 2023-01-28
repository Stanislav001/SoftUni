class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = { "child": 150, "student": 300, "collegian": 500 };
        this.listOfParticipants = [];
    }

    registerParticipant(name, condition, money) {
        if (!this.priceForTheCamp[condition]) {
            throw new Error("Unsuccessful registration at the camp.");
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
            throw new Error(`The ${name} is not registered in the camp.`);
        }
        this.listOfParticipants = this.listOfParticipants.filter(x => x.name !== name);
        return `The ${name} removed successfully.`;
    }

    timeToPlay(typeOfGame, participant1, participant2) {
        const indexOfFirstParticipant = this.listOfParticipants.findIndex(x => x.name === participant1);
        const indexOfSecondParticipant = this.listOfParticipants.findIndex(x => x.name === participant2);

        if (typeOfGame === 'WaterBalloonFights') {
            if (indexOfFirstParticipant === -1 || !indexOfSecondParticipant === -1) {
                throw new Error(`Invalid entered name/s.`);
            }

            if (this.listOfParticipants[indexOfFirstParticipant].condition !== this.listOfParticipants[indexOfSecondParticipant].condition) {
                throw new Error(`Choose players with equal condition.`);
            }

            if (this.listOfParticipants[indexOfFirstParticipant].power > this.listOfParticipants[indexOfSecondParticipant].power) {
                this.listOfParticipants[indexOfFirstParticipant].wins += 1;
                return `The ${participant1} is winner in the game ${typeOfGame}.`
            }
            if (this.listOfParticipants[indexOfFirstParticipant].power < this.listOfParticipants[indexOfSecondParticipant].power) {
                this.listOfParticipants[indexOfSecondParticipant].wins += 1;
                return `The ${participant2} is winner in the game ${typeOfGame}.`
            }
        }

        if (typeOfGame === 'Battleship') {
            if (indexOfFirstParticipant !== -1) {
                this.listOfParticipants[indexOfFirstParticipant].power += 20;
                return `The ${participant1} successfully completed the game ${typeOfGame}.`;
            }

        }
        return 'There is no winner.';
    }

    toString() {
        let initialResult = `${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}\n`;

        for (const participant of this.listOfParticipants) {
            initialResult += `${participant.name} - ${participant.condition} - ${participant.power} - ${participant.wins}\n`
        }

        return initialResult;
    }
}


try {
    const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
    console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
    console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
    console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
    console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
    console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
    console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

    console.log(summerCamp.toString());
} catch (error) {
    console.log(error);
}
