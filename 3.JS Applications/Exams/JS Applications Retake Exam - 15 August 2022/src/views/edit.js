import * as shoesService from "../api/shoes.js";
import { createSubmitHandler } from "../util.js";
import { html } from "../../node_modules/lit-html/lit-html.js";

const editTemplate = (shoes, onSubmit) => html`
  <section id="edit">
    <div class="form">
      <h2>Edit item</h2>
      <form @submit=${onSubmit} class="edit-form">
        <input type="text" name="brand" id="shoe-brand" placeholder="Brand" .value=${shoes.brand} />
        <input type="text" name="model" id="shoe-model" placeholder="Model" .value=${shoes.model} />
        <input type="text" name="imageUrl" id="shoe-img" placeholder="Image url" .value=${shoes.imageUrl} />
        <input type="text" name="release" id="shoe-release" placeholder="Release date" .value=${shoes.release} />
        <input type="text" name="designer" id="shoe-designer" placeholder="Designer" .value=${shoes.designer} />
        <input type="text" name="value" id="shoe-value" placeholder="Value" .value=${shoes.value} />
  
        <button type="submit">post</button>
      </form>
    </div>
  </section>
`;

export async function editView(ctx) {
  const shoesId = ctx.params.id;
  const shoes = await shoesService.getById(shoesId);

  ctx.render(editTemplate(shoes, createSubmitHandler(ctx, onSubmit)));
}

async function onSubmit(ctx, data, event) {
  const shoesId = ctx.params.id;
  if (Object.values(data).some((x) => x === "")) {
    return alert("All fields are required!");
  }

  await shoesService.update(shoesId, {
    brand: data.brand,
    model: data.model,
    imageUrl: data.imageUrl,
    release: data.release,
    designer: data.designer,
    value: data.value
  });

  event.target.reset();
  ctx.page.redirect("/details/" + shoesId);
}
