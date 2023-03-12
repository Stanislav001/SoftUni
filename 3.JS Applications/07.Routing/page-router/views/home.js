const root = document.getElementById('root');
import { html, render } from "../node_modules/lit-html/lit-html.js";

function homeTemplate() {
    return html`
    <h1>Home</h1>
    <p>dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
        specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,</p>
    `
}

export function homeView(context) {
    render(homeTemplate(), root);
}
