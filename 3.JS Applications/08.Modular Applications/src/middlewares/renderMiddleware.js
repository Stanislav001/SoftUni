import { navigationTemplate } from '../views/navigationView.js';
import { render, html } from '../../node_modules/lit-html/lit-html.js';

const root = document.querySelector('#root');
const renderHandler = (ctx, templateResult) => {
    let layout = html`
        <nav>
            ${navigationTemplate(ctx)}
        </nav>
        <main>
            ${templateResult}
        </main>
    `;
    render(layout, root);
}

export const renderMiddleware = (ctx, next) => {
    ctx.render = renderHandler.bind(null, ctx);
    next();
}