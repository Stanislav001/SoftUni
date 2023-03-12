const root = document.getElementById('root');
import { html, render } from "../node_modules/lit-html/lit-html.js";

function createTemplate(context) {
    return html`
    <form @submit=${(e) => createArticleHandler(context, e)}>
        <div>
            <label htmlFor="title"></label>
            <input type="text" name="title" id="title" />
        </div>
    
        <div>
            <label htmlFor="content"></label>
            <textarea type="text" cols="50" rows="10" name="content" id="content"></textarea>
        </div>
    
        <div>
            <label htmlFor="author"></label>
            <input type="text" name="author" id="author" />
        </div>
    
        <div>
            <input type="submit" id="Create" />
        </div>
    </form>
    `;
}

async function createArticleHandler(context, e) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const title = formData.get('title');
    const content = formData.get('content');
    const author = formData.get('author');

    const res = await fetch('http://localhost:3030/jsonstore/articles', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        }
        , body: JSON.stringify({ title, content, author })
    });

    const article = await res.json();
    if (article) {
        context.page.redirect(`/articles/${article._id}`);
    }
}

export async function createView(context) {

    render(createTemplate(context), root);
}


