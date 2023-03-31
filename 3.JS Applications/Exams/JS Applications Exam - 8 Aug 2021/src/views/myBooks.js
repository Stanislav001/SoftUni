import * as booksService from "../api/books.js";
import { html } from "../../node_modules/lit-html/lit-html.js";

const cardTemplate = (book) => html`
<li class="otherBooks">
    <h3>${book.title}</h3>
    <p>Type: ${book.title}</p>
    <p class="img"><img src=${book.imageUrl}></p>
    <a class="button" href="/details/${book._id}">Details</a>
</li>
`;

const myBooksTemplate = (books) => html`
<section id="my-books-page" class="my-books">
    <h1>My Books</h1>
    <ul class="my-books-list">
    ${books?.length > 0
        ? books.map(cardTemplate)
        : html`<p class="no-books">No books in database!</p>`}
    </ul>
</section>
`;

export async function myBooksView(ctx) {
    const userId = ctx?.user?._id;
    const books = await booksService.userBooks(userId);
    ctx.render(myBooksTemplate(books));
}