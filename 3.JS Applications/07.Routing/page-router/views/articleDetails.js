const root = document.getElementById('root');
import { html, render } from "../node_modules/lit-html/lit-html.js";

function articleDetailsTemplate(article) {
    return html`
        <h3>${article.title}</h3>
        <main>
            ${article.content}
        </main>
        <footer>
            <p>Author: ${article.author}</p>
        </footer>
    `;
}

export default async function articleDetailsView(context) {
    const article = await getArticleById(context.params.articleId);
    render(articleDetailsTemplate(article), root);
}


async function getArticleById(articleId) {
    console.log(articleId);
    const res = await fetch(`http://localhost:3030/jsonstore/articles/${articleId}`);
    const data = await res.json();

    return data;
}