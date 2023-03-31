
import { html, nothing } from "../../node_modules/lit-html/lit-html.js";


const cardTemplate = (post) => html`
<div class="post">
  <h2 class="post-title">${post.title}</h2>
  <img class="post-image" src=${post.imageUrl} alt="Material Image">
  <div class="btn-wrapper">
    <a href="/details/${post._id}" class="details-btn btn">Details</a>
  </div>
</div>
`;

const postTemplate = (posts) => html`
      <section id="my-posts-page">
        <h1 class="title">My Posts</h1>
        <div class="my-posts">
          ${posts?.length > 0 ? posts.map(cardTemplate) : nothing}
        </div>
        ${posts?.length === 0 ? html` <h1 class="title no-posts-title">You have no posts yet!</h1>` : nothing}
      
      </section>
`;

export async function myPostView(ctx) {
  const userId = ctx?.user?._id;
  const response = await fetch(`http://localhost:3000/data/posts?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);

  const posts = await response.json();
  ctx.render(postTemplate(posts));


}
