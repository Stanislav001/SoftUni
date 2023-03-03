import { updateNavigation } from "./util.js";
import { homePage } from "./pages/home.js";
import { loginPage } from "./pages/login.js";
import { createPage } from "./pages/create.js";
import { registerPage } from "./pages/register.js";

const routes = {
    '/': homePage,
    '/logout': logout,
    '/login': loginPage,
    '/create': createPage,
    '/register': registerPage,
};

document.querySelector('nav').addEventListener('click', onNavigate);
document.querySelector('#add-movie-button a').addEventListener('click', onNavigate);

function onNavigate(e) {
    if (e.target.tagName == 'A' && e.target.href) {
        e.preventDefault();

        const url = new URL(e.target.href);

        const view = routes[url?.pathname];
        if (typeof view === 'function') {
            view();
        }
    }
}

function logout() {
    localStorage.removeItem('user');
    updateNavigation();
}

updateNavigation();
homePage();