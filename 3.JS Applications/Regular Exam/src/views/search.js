import * as fruitsService from "../api/fruits.js";
import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import { getUserData, createSubmitHandler } from "../util.js";

const searchTemplate = (onSubmit,) => html`
<section id="search">
    <div class="form">
        <h2>Search</h2>
        <form class="search-form" @submit=${onSubmit}>
            <input type="text"  name="search" id="search-input" required />
            <button class="button-list" type="submit">Search</button>
        </form>
    </div>
    <h4>Results:</h4>
</section>
`;

const resultTemplate = (results, onSubmit, userData) => html`
<section id="search">
    <div class="form">
        <h2>Search</h2>
        <form class="search-form" @submit=${onSubmit}>
            <input type="text"  name="search" id="search-input" required />
            <button class="button-list">Search</button>
        </form>
    </div>
    <h4>Results:</h4>
    <div class="search-result">
    ${results.length === 0 ? html`<p class="no-result">No result.</p>` : nothing}
        ${results.length > 0 ? html`
                ${results.map(el => html`
                <div class="fruit">
                    <img src=${el.imageUrl} alt="example1" />
                    <h3 class="title">${el.name}</h3>
                    <p class="description">${el.description}</p>
                    <a class="details-btn" href="/details/${el._id}">More Info</a>
                </div>
                `)}
        ` : nothing}
    </div>
</section>
`;

export function searchPage(ctx) {
    const userData = getUserData();
    ctx.render(searchTemplate((createSubmitHandler(onSubmit))));

    async function onSubmit({ search }, form) {
        if (search == '') {
            return alert('Search field is required!')
        }
        const results = await fruitsService.searchItem(search);

        ctx.render(resultTemplate(results, (createSubmitHandler(onSubmit)), userData));
    }
}