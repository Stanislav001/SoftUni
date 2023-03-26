import * as shoesService from "../api/shoes.js";
import { html } from "../../node_modules/lit-html/lit-html.js";

const cardTemplate = (shoes) => html`
  <li class="card">
    <img src=${shoes.imageUrl} alt="travis" />
    <p><strong>Brand: </strong><span class="brand">${shoes.brand}</span></p>
    <p><strong>Model: </strong><span class="model">${shoes.model}</span></p>
    <p><strong>Value:</strong><span class="value">${shoes.value}</span>$</p>
    <a class="details-btn" href="/details/${shoes._id}">Details</a>
  </li>
`;

const dashboardTemplate = (shoes) => html`
  <section id="dashboard">
    <h2>Collectibles</h2>
    <ul class="card-wrapper">
    ${shoes?.length > 0
        ? shoes.map(cardTemplate)
        : html`<h2>There are no items added yet.</h2>`}  
    </ul>          
  </section>
`;

export async function dashboardView(ctx) {
  const shoes = await shoesService.getAll();
  ctx.render(dashboardTemplate(shoes));
}
