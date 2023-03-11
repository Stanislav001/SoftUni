export default function render(element, parent) {
    const template = document.createElement('template');
    template.innerHTML = element;

    parent.appendChild(template.content);
}