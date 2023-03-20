import { html } from "../../node_modules/lit-html/lit-html.js";
import * as offersService from "../api/offers.js";
import { createSubmitHandler } from "../util.js";

const editTemplate = (offer, onSubmit) => html`
  <section id="edit">
    <div class="form">
      <h2>Edit Offer</h2>
      <form @submit=${onSubmit} class="edit-form">
        <input
          type="text"
          name="title"
          id="job-title"
          placeholder="Title"
          .value=${offer.title}
        />
        <input
          type="text"
          name="imageUrl"
          id="job-logo"
          placeholder="Company logo url"
          .value=${offer.imageUrl}
        />
        <input
          type="text"
          name="category"
          id="job-category"
          placeholder="Category"
          .value=${offer.category}
        />
        <textarea
          id="job-description"
          name="description"
          placeholder="Description"
          rows="4"
          cols="50"
          .value=${offer.description}
        ></textarea>
        <textarea
          id="job-requirements"
          name="requirements"
          placeholder="Requirements"
          rows="4"
          cols="50"
          .value=${offer.requirements}
        ></textarea>
        <input
          type="text"
          name="salary"
          id="job-salary"
          placeholder="Salary"
          .value=${offer.salary}
        />

        <button type="submit">post</button>
      </form>
    </div>
  </section>
`;

export async function editView(ctx) {
  const offerId = ctx.params.id;
  const offer = await offersService.getById(offerId);

  ctx.render(editTemplate(offer, createSubmitHandler(ctx, onSubmit)));
}

async function onSubmit(ctx, data, event) {
  const offerId = ctx.params.id;
  if (Object.values(data).some((x) => x === "")) {
    return alert("All fields are required!");
  }

  await offersService.update(offerId, {
    title: data.title,
    salary: data.salary,
    category: data.category,
    imageUrl: data.imageUrl,
    description: data.description,
    requirements: data.requirements,
  });

  event.target.reset();
  ctx.page.redirect("/details/" + offerId);
}
