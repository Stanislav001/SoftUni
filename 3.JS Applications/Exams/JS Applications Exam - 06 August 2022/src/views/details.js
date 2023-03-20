import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import * as offersService from "../api/offers.js";
import { getUserData } from "../util.js";

const detailsTemplate = (offer, onDelete) => html`
  <section id="details">
    <div id="details-wrapper">
      <img id="details-img" src=${offer.imageUrl} alt="example1" />
      <p id="details-title">${offer.title}</p>
      <p id="details-category">
        Category: <span id="categories">${offer.category}</span>
      </p>
      <p id="details-salary">
        Salary: <span id="salary-number">${offer.salary}</span>
      </p>
      <div id="info-wrapper">
        <div id="details-description">
          <h4>Description</h4>
          <span>${offer.description}</span>
        </div>
        <div id="details-requirements">
          <h4>Requirements</h4>
          <span>${offer.requirements}</span>
        </div>
      </div>
      <p>Applications: <strong id="applications">1</strong></p>

      <div id="action-buttons">
        ${offer.isOwner
          ? html` <a href="/edit/${offer._id}" id="edit-btn">Edit</a>
              <a @click=${onDelete} href="javascript:void(0)" id="delete-btn"
                >Delete</a
              >`
          : nothing}
        ${offer?.userData?.accessToken && !offer.isOwner
          ? html`<a href="" id="apply-btn">Apply</a>`
          : nothing}
      </div>
    </div>
  </section>
`;

export async function detailsView(ctx) {
  const offerId = ctx.params.id;
  const offer = await offersService.getById(offerId);

  offer.userData = getUserData();
  if (ctx.user) {
    offer.isOwner = ctx.user._id === offer._ownerId;
  }
  ctx.render(detailsTemplate(offer, onDelete));

  async function onDelete() {
    const choice = confirm("Are you sure you want to delete this offer?");

    if (choice) {
      await offersService.deleteById(offerId);
      ctx.page.redirect("/");
    }
  }
}
