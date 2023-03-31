import { getUserData } from "../util.js";
import * as postsService from "../api/posts.js";
import { html, nothing } from "../../node_modules/lit-html/lit-html.js";

const detailsTemplate = (post, onDelete) => html`
    <section id="details-page">
      <h1 class="title">Post Details</h1>
    
      <div id="container">
        <div id="details">
          <div class="image-wrapper">
            <img src="./images/clothes.jpeg" alt="Material Image" class="post-image">
          </div>
          <div class="info">
            <h2 class="title post-title">${post.title}</h2>
            <p class="post-description">${post.description}</p>
            <p class="post-address">${post.address}</p>
            <p class="post-number">Phone number: ${post.phone}</p>
            <p class="donate-Item">Donate Materials: 0</p>
    
            <div class="btns">
              ${post.isOwner ? html`<a href="/edit/${post._id}" class="edit-btn btn">Edit</a>
              <a @click=${onDelete} href="javascript:void(0)" class="delete-btn btn">Delete</a>` : nothing}
    
              ${post?.userData?.accessToken && !post.isOwner ? html`<a href="#" class="donate-btn btn">Donate</a>` :
              nothing}
            </div>
          </div>
        </div>
      </div>
    </section>
`;

export async function detailsView(ctx) {
  const postId = ctx.params.id;
  const post = await postsService.getById(postId);

  post.userData = getUserData();
  if (ctx.user) {
    post.isOwner = ctx.user._id === post._ownerId;
  }
  ctx.render(detailsTemplate(post, onDelete));

  async function onDelete() {
    const choice = confirm("Are you sure you want to delete this post?");

    if (choice) {
      await postsService.deleteById(postId);
      ctx.page.redirect("/dashboard");
    }
  }
}
