import { html } from "../../node_modules/lit-html/lit-html.js";
import * as fruitsService from "../api/fruits.js";
import { createSubmitHandler } from "../util.js";

const editTemplate = (fruit, onSubmit) => html`
 <section id="edit">
          <div class="form">
            <h2>Edit Fruit</h2>
            <form @submit=${onSubmit} class="edit-form">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Fruit Name"
                .value=${fruit.name}
              />
              <input
                type="text"
                name="imageUrl"
                id="Fruit-image"
                placeholder="Fruit Image URL"
                .value=${fruit.imageUrl}
              />
              <textarea
                id="fruit-description"
                name="description"
                placeholder="Description"
                rows="10"
                cols="50"
                .value=${fruit.description}
              ></textarea>
              <textarea
                id="fruit-nutrition"
                name="nutrition"
                placeholder="Nutrition"
                rows="10"
                cols="50"
                .value=${fruit.nutrition}
              ></textarea>
              <button type="submit">post</button>
            </form>
          </div>
        </section>
`;

export async function editView(ctx) {
  const id = ctx.params.id;
  const fruit = await fruitsService.getById(id);
  ctx.render(editTemplate(fruit, createSubmitHandler(onSubmit)));

  async function onSubmit({ name, imageUrl, description, nutrition }, form) {
    if (name == '' || imageUrl == '' || description == '' || nutrition == '') {
      return alert('All fields are required')
    }
    await fruitsService.update(id, { name, imageUrl, description, nutrition })
    form.reset();

    ctx.page.redirect(`/details/${id}`)
  }
}

