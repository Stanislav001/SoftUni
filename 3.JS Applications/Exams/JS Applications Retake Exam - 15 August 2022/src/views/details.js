import { getUserData } from "../util.js";
import * as shoesService from "../api/shoes.js";
import { html, nothing } from "../../node_modules/lit-html/lit-html.js";

const detailsTemplate = (shoes, onDelete) => html`
<section id="details">
  <div id="details-wrapper">
    <p id="details-title">Shoe Details</p>
    <div id="img-wrapper">
      <img src=${shoes.imageUrl} alt="example1" />
    </div>
    <div id="info-wrapper">
      <p>Brand: <span id="details-brand">${shoes.brand}</span></p>
      <p>Model: <span id="details-model">${shoes.model}</span></p>
      <p>Release date: <span id="details-release">${shoes.release}</span></p>
      <p>Designer: <span id="details-designer">${shoes.designer}t</span></p>
      <p>Value: <span id="details-value">${shoes.value}</span></p>
    </div>

    ${shoes.isOwner
        ? html` 
        <div id="action-buttons">
          <a href="/edit/${shoes._id}" id="edit-btn">Edit</a>
          <a @click=${onDelete} href="javascript:void(0)"  id="delete-btn">Delete</a>
        </div>`: nothing}
  </div>
</section>
`;

export async function detailsView(ctx) {
  const shoesId = ctx.params.id;
  const shoes = await shoesService.getById(shoesId);

  shoes.userData = getUserData();
  if (ctx.user) {
    shoes.isOwner = ctx.user._id === shoes._ownerId;
  }
  ctx.render(detailsTemplate(shoes, onDelete));

  async function onDelete() {
    const choice = confirm("Are you sure you want to delete this shoes?");

    if (choice) {
      await shoesService.deleteById(shoesId);
      ctx.page.redirect("/");
    }
  }
}
