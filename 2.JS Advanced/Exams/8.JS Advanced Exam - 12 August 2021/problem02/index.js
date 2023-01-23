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
        let index = this.listOfArticles.findIndex(x => x.articleName === articleName);

        let existInGuest = this.guests.findIndex(x => x.guestName === guestName);

        if (index === -1) {
            throw new Error("This article is not found.");
        } 
        if (this.listOfArticles[index].quantity === 0) {
            return `The ${articleName} is not available.`
        }
        if (existInGuest === -1) {
            return "This guest is not invited.";
        }

        
    }
}

const artGallery = new ArtGallery('Curtis Mayfield');
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
console.log(artGallery.buyArticle('picture', 'Mona Liza', 'John'));
console.log(artGallery.buyArticle('item', 'Ancient vase', 'Peter'));
console.log(artGallery.buyArticle('item', 'Mona Liza', 'John'));