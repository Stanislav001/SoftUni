import contactTemplate from "./contact.js"

export default function contactListTemplate(contacts) {
    return `
    <div id="contact-list" style="display:flex; justify-content:space-around">
        ${contacts.map(x => contactTemplate(x)).join('')}
   </div>`
}