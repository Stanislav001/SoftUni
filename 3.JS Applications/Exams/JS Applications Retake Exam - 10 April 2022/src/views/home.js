import { html } from "../../node_modules/lit-html/lit-html.js";

const homeTemplate = () => html``;

export async function homeView(ctx) {
  ctx.render(homeTemplate());
}
