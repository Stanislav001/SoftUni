import { html } from "../../node_modules/lit-html/lit-html.js";
import * as offersService from "../api/offers.js";
import { createSubmitHandler } from "../util.js";

const createTemplate = (onSubmit) => html`
  <section id="create">
    <div class="form">
      <h2>Create Offer</h2>
      <form @submit=${onSubmit} class="create-form">
        <input type="text" name="title" id="job-title" placeholder="Title" />
        <input
          type="text"
          name="imageUrl"
          id="job-logo"
          placeholder="Company logo url"
        />
        <input
          type="text"
          name="category"
          id="job-category"
          placeholder="Category"
        />
        <textarea
          id="job-description"
          name="description"
          placeholder="Description"
          rows="4"
          cols="50"
        ></textarea>
        <textarea
          id="job-requirements"
          name="requirements"
          placeholder="Requirements"
          rows="4"
          cols="50"
        ></textarea>
        <input type="text" name="salary" id="job-salary" placeholder="Salary" />

        <button type="submit">post</button>
      </form>
    </div>
  </section>
`;

export function createView(ctx) {
  ctx.render(createTemplate(createSubmitHandler(ctx, onSubmit)));
}

async function onSubmit(ctx, data, event) {
  if (Object.values(data).some((x) => x === "")) {
    return alert("All fields are required!");
  }

  await offersService.create({
    title: data.title,
    salary: data.salary,
    category: data.category,
    imageUrl: data.imageUrl,
    description: data.description,
    requirements: data.requirements,
  });

  event.target.reset();
  ctx.page.redirect("/");
}
