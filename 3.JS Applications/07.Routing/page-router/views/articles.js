const root = document.getElementById('root');
import { html, render } from "../node_modules/lit-html/lit-html.js";

function articleTemplate(article) {
    return html`
    <article>
        <h3>${article.title}</h3>
        <a href="${`/articles/${article.id || article._id}`}">Read More</a>
        <footer>
            <p>Author: ${article.author}</p>
        </footer>
    </article>
    <hr>
    `;
}

function articlesTemplate(articles) {
    return html`
    <h1>Articles</h1>
    ${articles.map(x => html`${articleTemplate(x)}`)}`
}

export async function articlesView(context) {
    const articles = await getArticles();

    render(articlesTemplate(articles), root);
}

async function getArticles() {
    const res = await fetch('http://localhost:3030/jsonstore/articles');
    const data = await res.json();
    return Object.values(data);
}
