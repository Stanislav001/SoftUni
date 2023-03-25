import { html } from "../../node_modules/lit-html/lit-html.js";
import * as albumsService from "../api/albums.js";
import { createSubmitHandler } from "../util.js";

const editTemplate = (album, onSubmit) => html`
  <section id="edit">
    <div class="form">
      <h2>Edit Album</h2>
      <form @submit=${onSubmit} class="edit-form">
        <input
          type="text"
          name="singer"
          id="album-singer"
          placeholder="Singer/Band"
          .value=${album.singer}
        />
        <input
          type="text"
          name="album"
          id="album-album"
          placeholder="Album"
          .value=${album.album}
        />
        <input
          type="text"
          name="imageUrl"
          id="album-img"
          placeholder="Image url"
          .value=${album.imageUrl}
        />
        <input
          type="text"
          name="release"
          id="album-release"
          placeholder="Release date"
          .value=${album.release}
        />
        <input
          type="text"
          name="label"
          id="album-label"
          placeholder="Label"
          .value=${album.label}
        />
        <input
          type="text"
          name="sales"
          id="album-sales"
          placeholder="Sales"
          .value=${album.sales}
        />

        <button type="submit">post</button>
      </form>
    </div>
  </section>
`;

export async function editView(ctx) {
  const albumId = ctx.params.id;
  const album = await albumsService.getById(albumId);

  ctx.render(editTemplate(album, createSubmitHandler(ctx, onSubmit)));
}

async function onSubmit(ctx, data, event) {
  const albumId = ctx.params.id;
  if (Object.values(data).some((x) => x === "")) {
    return alert("All fields are required!");
  }

  await albumsService.update(albumId, {
    album: data.album,
    label: data.label,
    sales: data.sales,
    singer: data.singer,
    release: data.release,
    imageUrl: data.imageUrl,
  });

  event.target.reset();
  ctx.page.redirect("/details/" + albumId);
}
