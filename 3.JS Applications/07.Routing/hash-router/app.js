function homeTemplate() {
    return `
    <h1>Home</h1>
    <p>dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,</p>
    `
}

function articlesTemplate() {
    return `
    <h1>Articles</h1>
    <p>dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,</p>
    <p>dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,</p>
    <p>dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,</p>
    <p>dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,</p>
    `
}

function aboutTemplate() {
    return `
    <h1>About</h1>
    <p>dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,</p>
    `
}

const routes = {
    '#home': homeTemplate,
    '#articles': articlesTemplate,
    '#about': aboutTemplate,
};

const root = document.getElementById('root');

window.addEventListener('hashchange', (e) => {
    const template = routes[location.hash];

    root.innerHTML = template();
});