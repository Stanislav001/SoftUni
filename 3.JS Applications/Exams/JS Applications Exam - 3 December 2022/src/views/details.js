import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import * as albumsService from "../api/albums.js";
import { getUserData } from "../util.js";

const detailsTemplate = (album, onDelete) => html`
  <section id="details">
    <div id="details-wrapper">
      <p id="details-title">Album Details</p>
      <div id="img-wrapper">
        <img src=${album.imageUrl} alt="example1" />
      </div>
      <div id="info-wrapper">
        <p>
          <strong>Band:</strong><span id="details-singer">${album.singer}</span>
        </p>
        <p>
          <strong>Album name:</strong
          ><span id="details-album">${album.album}</span>
        </p>
        <p>
          <strong>Release date:</strong
          ><span id="details-release">${album.release}</span>
        </p>
        <p>
          <strong>Label:</strong><span id="details-label">${album.label}</span>
        </p>
        <p>
          <strong>Sales:</strong><span id="details-sales">${album.sales}</span>
        </p>
      </div>
      <div id="likes">Likes: <span id="likes-count">0</span></div>

      ${album?.userData?.accessToken && !album.isOwner
        ? html` <div id="action-buttons">
            <a href="" id="like-btn">Like</a>
          </div>`
        : nothing}
      ${album.isOwner
        ? html` <div id="action-buttons">
            <a href="/edit/${album._id}" id="edit-btn">Edit</a>
            <a @click=${onDelete} href="javascript:void(0)" id="delete-btn"
              >Delete</a
            >
          </div>`
        : nothing}
    </div>
  </section>
`;

export async function detailsView(ctx) {
  const albumId = ctx.params.id;
  const album = await albumsService.getById(albumId);

  album.userData = getUserData();
  if (ctx.user) {
    album.isOwner = ctx.user._id === album._ownerId;
  }
  ctx.render(detailsTemplate(album, onDelete));

  async function onDelete() {
    const choice = confirm("Are you sure you want to delete this album?");

    if (choice) {
      await albumsService.deleteById(albumId);
      ctx.page.redirect("/");
    }
  }
}
