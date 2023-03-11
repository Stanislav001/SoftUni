import navBarTemplate from "./navbar.js";
import contactListTemplate from "./contactList.js";
import { html } from "../../node_modules/lit-html/lit-html.js";

const mainTemplate = ({ addContactHandler, contacts }) => html`
    <header>
        ${navBarTemplate(addContactHandler)}
    </header>
    <main>
        ${contactListTemplate(contacts)}
    </main>
`;

export default mainTemplate;