import { html } from "../../node_modules/lit-html/lit-html.js";

export default function contactTemplate(contact) {
    return html`
    <div class="card" style="width: 18rem;">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkx_1S6evg0XbB6hdPO6_IDDDzbQGmMG6oW4Ev-Qw&s"
            class="card-img-top" alt="contact">
        <div class="card-body">
            <h5 class="card-title">${contact.person}</h5>
            <p class="card-text">${contact.phone}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>`
}