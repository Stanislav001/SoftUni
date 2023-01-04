class Triathlon {
    constructor(competitionName) {
        this.competitionName = competitionName;
        this.participants = {};
        this.listOfFinalists = [];
    }

    addParticipant(participantName, participantGender) {
        if (this.participants[participantName]) {
            return `${participantName} has already been added to the list`;
        }
        this.participants[participantName] = participantGender;
        return `A new participant has been added - ${participantName}`;
    }

    completeness(participantName, condition) {
        if (!this.participants[participantName]) {
            throw new Error(`${participantName} is not in the current participants list`);
        }
        if (this.participants[participantName] && condition < 30) {
            throw new Error(`${participantName} is not well prepared and cannot finish any discipline`);
        }

        let numbersOfEvents = Math.round(condition / 30);
        if (numbersOfEvents === 1 || numbersOfEvents === 2) {
            return `${participantName} could only complete ${numbersOfEvents} of the disciplines`;
        }

        const currentParticipantValue = this.participants[participantName];
        this.listOfFinalists.push({ participantName, currentParticipantValue });
        return `Congratulations, ${participantName} finished the whole competition`;
    }

    rewarding(participantName) {
        const currentPerson = this.listOfFinalists.find(x => x.participantName === participantName);
        if (!currentPerson) {
            return `${participantName} is not in the current finalists list`;
        }
        return `${participantName} was rewarded with a trophy for his performance`;
    }

    showRecord(criteria) {
        if (criteria !== 'male' && criteria !== 'female' && criteria !== 'all') {
            return `There are no ${criteria}'s that finished the competition`;
        }
        if (this.listOfFinalists.length === 0) {
            return `There are no finalists in this competition`;
        }

        const finalist = this.listOfFinalists.find(x => x.currentParticipantValue === criteria);

        if (finalist && (criteria === 'male' || criteria === 'female')) {
            return `${finalist.participantName} is the first ${criteria} that finished the ${this.competitionName} triathlon`;
        } else if (criteria == 'all') {
            let result = `List of all ${this.competitionName} finalists:\n`;
            this.listOfFinalists.sort((a, b) => a.participantName.localeCompare(b.participantName))

            this.listOfFinalists.forEach(element => {
                result += `${element.participantName}\n`;
            });
            return result;
        }
    }
}

const contest = new Triathlon("Dynamos");
console.log(contest.addParticipant("Peter", "male"));
console.log(contest.addParticipant("Sasha", "female"));
console.log(contest.completeness("Peter", 100));
console.log(contest.completeness("Sasha", 90));
console.log(contest.rewarding("Peter"));
console.log(contest.rewarding("Sasha"));
console.log(contest.showRecord("all"));