import * as offersService from "../api/offers.js";
import { html } from "../../node_modules/lit-html/lit-html.js";

const cardTemplate = (offer) => html`
  <div class="offer">
    <img src=${offer.imageUrl} />
    <p><strong>Title: </strong><span class="title">${offer.title}</span></p>
    <p><strong>Salary:</strong><span class="salary">${offer.salary}</span></p>
    <a class="details-btn" href="/details/${offer._id}">Details</a>
  </div>
`;

const dashboardTemplate = (offers) => html`
  <section id="dashboard">
    <h2>Job Offers</h2>

    ${offers.length > 0
      ? offers.map(cardTemplate)
      : html`<h2>No offers yet.</h2>`}
  </section>
`;

export async function dashboardView(ctx) {
  const offers = await offersService.getAll();
  ctx.render(dashboardTemplate(offers));
}
