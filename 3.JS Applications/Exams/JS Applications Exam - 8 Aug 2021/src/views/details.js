import { html, nothing } from "../../../../node_modules/lit-html/lit-html.js";
import * as booksService from "../api/books.js";
import { getUserData } from "../util.js";

const detailsTemplate = (book, likes, deleteItem, likeItem, userLike) => html`
<section id="details-page" class="details">
    <div class="book-information">
        <h3>${book.title}</h3>
        <p class="type">Type: ${book.type}</p>
        <p class="img"><img src=${book.imageUrl}></p>
        <div class="actions">
            ${book.isOwner ? html`
                <a class="button" href="/edit/${book?._id}">Edit</a>
                <a class="button" @click=${deleteItem} href="javascript:void(0)">Delete</a>` : null}
                ${book?.userData?.accessToken && !book.isOwner ? html`<a class="button" href="#">Like</a>` : nothing}

                <div class="likes">
                    <img class="hearts" src="/images/heart.png">
                    <span id="total-likes" href="javascript:void(0)" @click = ${likeItem}>Likes: ${likes}</span>
                </div>
            </div>
        </div>
    <div class="book-description">
        <h3>Description:</h3>
        <p>${book.description}</p>
    </div>
</section>
`;

export async function detailsView(ctx) {
    const id = ctx.params.id;
    const likes = await booksService.getLikes(id);
    const element = await booksService.getById(id);
    const userData = getUserData();

    if (userData) {
        element.isOwner = element._ownerId == userData._id;
        const userLike = await booksService.getUserLike(id, ctx.user._id);
        ctx.render(detailsTemplate(element, likes, deleteItem, likeItem, userLike))
    } else {
        ctx.render(detailsTemplate(element, likes, deleteItem, likeItem))
    }

    async function deleteItem(e) {
        e.preventDefault();
        const confirmation = confirm('Are you sure?');
        if (confirmation) {
            del(id);
            ctx.page.redirect('/profile')
        }
    }

    async function likeItem(e) {
        e.preventDefault();
        booksService.like(element._id);
        ctx.page.redirect(`/details/${id}`)
    }
}