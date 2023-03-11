import { getContacts } from "./api.js";
import mainTemplate from "./templates/mainTemplate.js";
import { render, html } from '../node_modules/lit-html/lit-html.js';

const rootElement = document.getElementById('root');

const contacts = await getContacts();
render(mainTemplate({ contacts, addContactHandler }), rootElement);

function addContactHandler(e) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const person = formData.get('person');
    const phone = formData.get('phone');


    fetch('http://localhost:3030/jsonstore/phonebook', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ person, phone })
    })
        .then(res => res.json())
        .then(data => {
            const currentContact = [...contacts, data];
            render(mainTemplate({ contacts: currentContact, addContactHandler }), rootElement);
        })
}