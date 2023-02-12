class LibraryCollection {
    constructor(capacity) {
        this.capacity = capacity;
        this.books = [];
    }

    addBook(bookName, bookAuthor) {
        if (this.capacity <= 0) {
            throw new Error("Not enough space in the collection.");
        }
        const addedBook = { bookName, bookAuthor, payed: false, }
        this.books.push(addedBook);
        this.capacity -= 1;

        return `The ${bookName}, with an author ${bookAuthor}, collect.`;
    }

    payBook(bookName) {
        let index = this.books.findIndex(book => book.bookName === bookName);

        if (index === -1) {
            throw new Error(`${bookName} is not in the collection.`);
        }

        if (this.books[index].payed) {
            throw new Error(`${bookName} has already been paid.`);
        }
        this.books[index].payed = true;
        return `${bookName} has been successfully paid.`;
    }

    removeBook(bookName) {
        let index = this.books.findIndex(book => book.bookName === bookName);

        if (index === -1) {
            throw new Error("The book, you're looking for, is not found.");
        }

        if (!this.books[index].payed) {
            throw new Error(`${bookName} need to be paid before removing from the collection.`);
        }

        this.books = this.books.filter(book => book.bookName !== bookName);
        return `${bookName} remove from the collection.`;
    }

    getStatistics(bookAuthor) {
        const initMessage = `The book collection has ${this.capacity} empty spots left.`;

        if (!bookAuthor) {
            this.books.sort((a, b) => a.bookName.localeCompare(b.bookName));

            const bookMessage = this.books.map(book => `${book.bookName} == ${book.bookAuthor} - ${book.payed ? 'Has Paid' : 'Not Paid'}.`);

            return [
                initMessage,
                bookMessage.join('\n')
            ].join('\n');
        } else {
            let booksOfAuthor = this.books.filter(book => book.bookAuthor === bookAuthor);

            if (booksOfAuthor.length === 0) {
                throw new Error(`${bookAuthor} is not in the collection.`);
            }
            const bookMessage = booksOfAuthor.map(book => `${book.bookName} == ${book.bookAuthor} - ${book.payed ? 'Has Paid' : 'Not Paid'}.`);

            return bookMessage.join('\n');
        }
    }
}

const library = new LibraryCollection(2)
console.log(library.addBook('Don Quixote', 'Miguel de Cervantes'));
console.log(library.getStatistics('Miguel de Cervantes'));
