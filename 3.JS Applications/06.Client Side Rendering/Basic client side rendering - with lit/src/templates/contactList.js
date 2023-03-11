import contactTemplate from "./contact.js"
import { html } from "../../node_modules/lit-html/lit-html.js";

export default function contactListTemplate(contacts) {
    return html`
    <div id="contact-list" style="display:flex; justify-content:space-around; flex-wrap:wrap">
        ${contacts.map(x => html`${contactTemplate(x)}`)}
    </div>`
}