import { getUserData } from "../util.js";
import * as productService from "../api/products.js";
import { html, nothing } from "../../node_modules/lit-html/lit-html.js";

const detailsTemplate = (product, onDelete) => html`
    <section id="details">
      <div id="details-wrapper">
        <img id="details-img" src=${product.imageUrl} alt="example1" />
        <p id="details-title">${product.name}</p>
        <p id="details-category">
          Category: <span id="categories">${product.category}</span>
        </p>
        <p id="details-price">
          Price: <span id="price-number">${product.price}</span>$</p>
        <div id="info-wrapper">
          <div id="details-description">
            <h4>Bought: <span id="buys">0</span> times.</h4>
            <span>${product.description}.</span>
          </div>
        </div>
    
        <div id="action-buttons">
          ${product.isOwner ? html`
          <a href="/edit/${product._id}" id="edit-btn">Edit</a>
          <a id="delete-btn" @click=${onDelete} href="javascript:void(0)">Delete</a>` : nothing}
          ${product?.userData?.accessToken && !product.isOwner ? html`<a href="" id="buy-btn">Buy</a>` : nothing}
        </div>
      </div>
    </section>
`;

export async function detailsView(ctx) {
  const productId = ctx.params.id;
  const product = await productService.getById(productId);

  product.userData = getUserData();
  if (ctx.user) {
    product.isOwner = ctx.user._id === product._ownerId;
  }
  ctx.render(detailsTemplate(product, onDelete));

  async function onDelete() {
    const choice = confirm("Are you sure you want to delete this product?");

    if (choice) {
      await productService.deleteById(productId);
      ctx.page.redirect("/");
    }
  }
}
