import { updateAuth } from "../auth.js";

const loginSection = document.querySelector('.login');
const loginForm = loginSection.querySelector('form');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(loginForm);
    const email = formData.get('email');
    const password = formData.get('password');

    fetch('http://localhost:3030/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
        .then(res => res.json())
        .then(userData => {
            localStorage.setItem('user', JSON.stringify(userData));
            updateAuth();
            alert('Successfully logged in!');
        })
        .catch(err => console.error(err))
});

export function renderLogin() {
    loginSection.style.display = 'block';

}