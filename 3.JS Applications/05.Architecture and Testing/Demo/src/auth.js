const guestNavigation = document.querySelector('#guest');
const userNavigation = document.querySelector('#user');

export function updateAuth() {
    const userData = localStorage.getItem('user');

    if (userData) {
        guestNavigation.style.display = 'none';
        userNavigation.style.display = 'inline';
    } else {
        userNavigation.style.display = 'none';
        guestNavigation.style.display = 'inline';
    }

}

export function logoutHandler() {
    localStorage.removeItem('user');
    updateAuth();
}

export function getToken() {
    const userData = localStorage.getItem('user');

    if (userData) {
        const user = JSON.parse(userData);

        return user.accessToken;
    }
}

export function saveUser(user) {
    localStorage.setItem('user', JSON.stringify(user));
}