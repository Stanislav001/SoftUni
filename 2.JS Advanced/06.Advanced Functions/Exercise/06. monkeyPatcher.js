function monkeyPatcher(command) {
    function statusChecker(upvote, downvote, balance) {
        let status = '';
        const total = upvote + downvote;
        const positiveVotes = (upvote / total) * 100;

        if (total < 10) {
            status = 'new';
        } else if (positiveVotes > 66) {
            status = 'hot';
        } else if (positiveVotes >= 50 && positiveVotes <= 66 && balance >= 0 && total > 100) {
            status = 'controversial';
        } else if (balance < 0) {
            status = 'unpopular';
        } else {
            status = 'new';
        }

        return status;
    }

    const ratingManipulator = {
        upvote: () => this.upvotes += 1,
        downvote: () => this.downvotes += 1,
        score: () => {
            let status = '';
            let inflated = 0;
            if (this.upvotes + this.downvotes > 50) {
                inflated = Math.ceil(Math.max(this.upvotes, this.downvotes) * 0.25);
            }
            const upvotes = this.upvotes + inflated;
            const downvotes = this.downvotes + inflated;
            const balance = this.upvotes - this.downvotes;

            status = statusChecker(this.upvotes, this.downvotes, balance);

            return [upvotes, downvotes, balance, status];
        }
    }

    return ratingManipulator[command](this);
}

let post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 100,
    downvotes: 100
};

monkeyPatcher.call(post, 'upvote');
monkeyPatcher.call(post, 'downvote');
let score = monkeyPatcher.call(post, 'score'); // [127, 127, 0, 'controversial']
console.log(score);
monkeyPatcher.call(post, 'downvote');        // (executed 50 times)
score = monkeyPatcher.call(post, 'score');     // [139, 189, -50, 'unpopular']
console.log(score);