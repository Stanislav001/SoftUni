import * as booksService from "../api/books.js";
import { html } from "../../node_modules/lit-html/lit-html.js";

const cardTemplate = (book) => html`
  <li class="otherBooks">
    <h3>${book.title}</h3>
    <p>Type: ${book.type}</p>
    <p class="img"><img src=${book.imageUrl}></p>
    <a class="button" href="/details/${book?._id}">Details</a>
  </li>
`;

const dashboardTemplate = (books) => html`

<section id="dashboard-page" class="dashboard">
  <h1>Dashboard</h1>
            
  <ul class="other-books-list">
  ${books?.length > 0
    ? books.map(cardTemplate)
    : html`<p class="no-books">No books in database!</p>`}
  </ul>  
</section>
`;

export async function dashboardView(ctx) {
  const books = await booksService.getAll();
  ctx.render(dashboardTemplate(books));
}
