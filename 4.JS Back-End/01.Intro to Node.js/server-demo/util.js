function html(body, title = "Welcome") {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <title>${title}</title>
    </head>
    <body>
        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/catalog">Catalog</a></li>
                <li><a href="/about">About</a></li>
            </ul>
        </nav>
        ${body}
    </body>
    </html>
    `;
}

function getItems() {
    return Object.entries(data).map(([id, item]) => Object.assign({}, item, { id }));
}

function addItem(name, color) {
    const id = generateId();
    data[id] = { name, color }
}

function deleteItem(id) {
    delete data[id];
}

function generateId() {
    return 'XXXXXXXX'.replace(/x/g, () => (Math.random() * 16 | 0).toString(16));
}

const data = {
    '9876asf1': {
        name: 'Product 1',
        color: 'red',
    },
    'a3sfe12': {
        name: 'Product 2',
        color: 'green',
    },
}

module.exports = {
    html,
    getItems,
    addItem,
    deleteItem
}