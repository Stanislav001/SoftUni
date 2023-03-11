import { html, render } from 'lit-html';

const template = (items, styleClass) => html`
    <h1>Hello from Lit HTML</h1>
    
    ${items.length === 0 ? 
        html`<p>No users</p>` : 
        html`<ul>
           ${items.map(x => html`<li class=${styleClass}>${x}</li>`)}
        </ul>`
    }
   
    <button ?disabled=${items.length > 4} @click=${() => onClick()}>Add</button>
`;

let items = ['Pesho', 'Gosho', 'Ivan'];
const root = document.querySelector('#root');
render(template(items, 'horizontal'), root);

function onClick() {
    items.push('Robby');
    render(template(items, 'horizontal'), root);
}