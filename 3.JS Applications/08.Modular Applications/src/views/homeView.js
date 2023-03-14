import * as movieService from '../services/movieService.js';
import { html } from '../../node_modules/lit-html/lit-html.js';

const movieTemplate = (movie) => html`
<div class="card movie-card">
    <img src=${movie.img} class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${movie.title}</h5>
        <a href="/movies/${movie._id}" class="btn btn-primary">Go somewhere</a>
    </div>
</div>
`;

const homeTemplate = (movies) => html`
    <h1>Movie List</h1>
    <div class="movie-list">
        ${movies.map(x => movieTemplate(x))}
    </div>
`;

export const homeView = (ctx) => {
    const searchParams = new URLSearchParams(ctx.querystring);

    movieService.getAll(searchParams.get('search'))
        .then(movies => {
            ctx.render(homeTemplate(movies));
        });
}