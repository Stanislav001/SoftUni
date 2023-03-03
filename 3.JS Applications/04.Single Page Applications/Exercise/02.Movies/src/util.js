const views = [...document.querySelectorAll('.view-section')];
const usersNavigation = [...document.querySelectorAll('.user')];
const guestNavigation = [...document.querySelectorAll('.guest')];
const welcomeMessage = document.querySelector('#welcome-msg');

function hideAllSections() {
    views.forEach(view => view.style.display = 'none');
}

export function showView(section) {
    hideAllSections();
    section.style.display = 'block';
}

export function spinner() {
    const element = document.createElement('p');
    element.innerHTML = 'Loading ...';

    return element;
}

export function updateNavigation() {
    const userData = JSON.parse(localStorage.getItem('user'));

    if (userData) {
        guestNavigation.forEach(x => x.style.display = 'none');
        usersNavigation.forEach(x => x.style.display = 'inline-block');
        welcomeMessage.textContent = `Welcome ${userData.email}`;
    } else {
        usersNavigation.forEach(x => x.style.display = 'none');
        guestNavigation.forEach(x => x.style.display = 'inline-block');
        welcomeMessage.textContent = '';
    }
}