class SmartHike {
    constructor(username) {
        this.username = username;
        this.goals = {}
        this.listOfHikes = [];
        this.resources = 100;
    }

    addGoal(peak, altitude) {
        if (this.goals[peak]) {
            return `${peak} has already been added to your goals`;
        }

        this.goals[peak] = altitude;
        return `You have successfully added a new goal - ${peak}`;
    }

    hike(peak, time, difficultyLevel) {
        if (!this.goals.hasOwnProperty(peak)) {
            throw new Error(`${peak} is not in your current goals`);
        }

        if (this.resources == 0) {
            throw new Error('You don\'t have enough resources to start the hike');
        }

        let usedResources = time * 10;

        let diff = this.resources - usedResources;

        if (diff < 0) {
            return 'You don\'t have enough resources to complete the hike';
        }

        this.resources -= usedResources;
        this.listOfHikes.push({
            peak,
            time,
            difficultyLevel
        });

        return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`;
    }

    rest(time) {
        let rest = time * 10;
        if (this.resources + rest >= 100) {
            return `Your resources are fully recharged. Time for hiking!`;
        }
        this.resources += rest;

        return `You have rested for ${time} hours and gained ${rest}% resources`;
    }

    showRecord(criteria) {
        if (this.listOfHikes.length < 1) {
            return `${this.username} has not done any hiking yet`;
        }

        if (criteria == 'all') {
            const hikes = this.listOfHikes.map(h => `${this.username} hiked ${h.peak} for ${h.time} hours`);

            return [
                `All hiking records:`,
                `${hikes.join('\n')}`
            ].join('\n');

        } else {
            let isFound = this.listOfHikes.find(h => h.difficultyLevel == criteria);

            if (isFound == undefined) {
                return `${this.username} has not done any ${criteria} hiking yet`;
            }

            this.listOfHikes.map(h => h.difficultyLevel == criteria);
            this.listOfHikes.sort((a, b) => a.time - b.time);

            const hike = this.listOfHikes[0];
            return `${this.username}'s best ${criteria} hike is ${hike.peak} peak, for ${hike.time} hours`;
        }
    }
}

const user = new SmartHike('Vili');
user.addGoal('Musala', 2925);
user.hike('Musala', 8, 'hard');
console.log(user.showRecord('easy'));
user.addGoal('Vihren', 2914);
user.hike('Vihren', 4, 'hard');
console.log(user.showRecord('hard'));
user.addGoal('Rui', 1706);
user.hike('Rui', 3, 'easy');
console.log(user.showRecord('all'));