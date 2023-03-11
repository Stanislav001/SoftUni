import { getContacts } from "./api.js";
import render from "./templates/render.js";
import navBarTemplate from "./templates/navbar.js";
import contactListTemplate from "./templates/contactList.js";
import contactTemplate from "./templates/contact.js";

const rootElement = document.getElementById('root');

const navBarTemplateResult = navBarTemplate();
render(navBarTemplateResult, rootElement);

const contacts = await getContacts();
render(contactListTemplate(contacts), rootElement);

window.addContact = function () {
    fetch('http://localhost:3030/jsonstore/phonebook', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ person: 'Stas', phone: '0931828' })
    })
        .then(res => res.json())
        .then(data => {
            render(contactTemplate(data), document.querySelector('#contact-list'));
        })
}