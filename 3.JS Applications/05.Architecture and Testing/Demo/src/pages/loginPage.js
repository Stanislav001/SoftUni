import { login } from "../api.js";
import { saveUser, updateAuth } from "../auth.js";

const loginSection = document.querySelector('.login');
const loginForm = loginSection.querySelector('form');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(loginForm);
    const email = formData.get('email');
    const password = formData.get('password');

    login(email, password)
        .then(userData => {
            saveUser(userData);
            updateAuth();
            alert('Successfully logged in!');
        })
        .catch(err => console.error(err))
});

export function renderLogin() {
    loginSection.style.display = 'block';

}