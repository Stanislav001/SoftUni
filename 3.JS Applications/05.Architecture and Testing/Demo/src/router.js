import { renderHome } from "./pages/homePage.js";
import { renderLogin } from "./pages/loginPage.js";
import { renderCreate } from "./pages/createPage.js";
import { renderLogout } from "./pages/logoutPage.js";
import { renderErrorPage } from "./pages/errorPage.js";
import { renderRegister } from "./pages/registerPage.js";

const mainContent = document.querySelector('.main-content');

const routes = {
    '/': renderHome,
    '/login': renderLogin,
    '/create': renderCreate,
    'error': renderErrorPage,
    '/register': renderRegister,
    '/logout': renderLogout,
}

export function router(path) {
    hideAllSectionHandler();

    const renderer = routes[path] || renderErrorPage;
    renderer();
}

function hideAllSectionHandler() {
    for (const section of mainContent.children) {
        section.style.display = 'none';
    }
}