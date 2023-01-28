class ArtGallery {
    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = {
            'picture': 200,
            'photo': 50,
            'item': 250
        };
        this.listOfArticles = [];
        this.guests = [];
    }

    addArticle(articleModel, articleName, quantity) {
        if (!this.possibleArticles[articleModel.toLowerCase()]) {
            throw new Error("This article model is not included in this gallery!");
        }

        let indexOfName = this.listOfArticles.findIndex(x => x.articleName === articleName);

        if (indexOfName === -1) {
            articleModel = articleModel.toLowerCase();
            const currentElement = { articleModel, articleName, quantity }
            this.listOfArticles.push(currentElement);
        } else {
            if (this.listOfArticles[indexOfName].articleModel === articleModel) {
                this.listOfArticles[indexOfName].quantity += Number(quantity);
            }
        }

        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;
    }

    inviteGuest(guestName, personality) {
        let index = this.guests.findIndex(x => x.guestName === guestName);

        if (index === - 1) {
            const currentElement = { guestName, points: personality === 'Vip' ? 500 : personality === 'Middle' ? 250 : 50, purchaseArticle: 0 };
            this.guests.push(currentElement);
            return `You have successfully invited ${guestName}!`;
        } else {
            throw new Error(`${guestName} has already been invited.`);
        }
    }

    buyArticle(articleModel, articleName, guestName) {
        if (!this.listOfArticles.some(x => x.articleName == articleName && x.articleModel == articleModel)) {
            throw new Error(`This article is not found.`);
        }
        let articleToBuy = this.listOfArticles.find(x => x.articleModel == articleModel && x.articleName == articleName);

        if (articleToBuy.quantity <= 0) {
            throw new Error(`The {articleName} is not available.`);
        }
        if (!this.guests.some(x => x.guestName == guestName)) {
            throw new Error(`This guest is not invited.`);
        }

        let guest = this.guests.find(x => x.guestName == guestName);

        if (guest.points < this.possibleArticles[articleModel.toLowerCase()]) {
            return `You need to more points to purchase the article.`;
        } else {
            guest.points -= this.possibleArticles[articleModel.toLowerCase()];
            articleToBuy.quantity--;
            guest.purchaseArticle++;
        }
        return `${guestName} successfully purchased the article worth ${this.possibleArticles[articleModel.toLowerCase()]} points.`;
    }

    showGalleryInfo(criteria) {
        if (criteria === 'article') {
            return `Articles information:\n${this.listOfArticles
                .map(article => `${article.articleModel} - ${article.articleName} - ${article.quantity}`)
                .join('\n')}`;
        }

        if (criteria === 'guest') {
            return `Guests information:\n${this.guests.map(guest => `${guest.guestName} - ${guest.purchaseArticle}`).join('\n')}`;
        }
    }
}

const artGallery = new ArtGallery('Curtis Mayfield');
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
artGallery.buyArticle('picture', 'Mona Liza', 'John');
artGallery.buyArticle('item', 'Ancient vase', 'Peter');
console.log(artGallery.showGalleryInfo('article'));
console.log(artGallery.showGalleryInfo('guest'));
