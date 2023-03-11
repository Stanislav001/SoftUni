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

function errorTemplate() {
    return `
        <h1>Page not found</h1>
    `;
}

const routes = {
    '/': homeTemplate,
    '/home': homeTemplate,
    '/articles': articlesTemplate,
    '/about': aboutTemplate,
};

const root = document.getElementById('root');

function navigate(pathname, pushState = true) {
    if (pushState) {
        history.pushState({}, '', pathname);
    }
    let template = routes[pathname];
    if (!template) {
        template = errorTemplate;
    }
    root.innerHTML = template();
}

document.body.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        e.preventDefault();
        const url = new URL(e.target.href);

        navigate(url.pathname);
    }
});

window.addEventListener('popstate', (e) => {
    navigate(location.pathname, false);
});

navigate(location.pathname, false);