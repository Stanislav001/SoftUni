import * as productsService from "../api/products.js";
import { html } from "../../node_modules/lit-html/lit-html.js";

const cardTemplate = (product) => html`
  <div class="product">
    <img src=${product.imageUrl} />
    <p class="title">${product.name}</p>
    <p><strong>Price:</strong><span class="price">${product.price} </span>$</p>
    <a class="details-btn" href="/details/${product._id}">Details</a>
  </div>
`;

const productTemplate = (products) => html`
  <h2>Products</h2>
  <section id="dashboard">
    ${products?.length > 0
          ? products.map(cardTemplate)
          : html` <h2>No products yet.</h2>`}
  </section>
`;

export async function productView(ctx) {
  const products = await productsService.getAll();
  ctx.render(productTemplate(products));
}
