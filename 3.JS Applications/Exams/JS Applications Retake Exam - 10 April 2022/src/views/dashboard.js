import * as postsService from "../api/posts.js";
import { html,nothing } from "../../node_modules/lit-html/lit-html.js";

const cardTemplate = (post) => html`
  <div class="post">
    <h2 class="post-title">${post.title}</h2>
    <img class="post-image" src=${post.imageUrl} alt="Material Image">
    <div class="btn-wrapper">
      <a href="/details/${post?._id}" class="details-btn btn">Details</a>
    </div>
  </div>
`;

const dashboardTemplate = (posts) => html`
 <section id="dashboard-page">
    <h1 class="title">All Posts</h1>
    <div class="all-posts">
      ${posts?.length > 0
        ? posts.map(cardTemplate)
        : nothing}
    </div>

    ${posts.length === 0 ? html`<h1 class="title no-posts-title">No posts yet!</h1>`: nothing}
  </section>
`;

export async function dashboardView(ctx) {
  const posts = await postsService.getAll();
  ctx.render(dashboardTemplate(posts));
}
