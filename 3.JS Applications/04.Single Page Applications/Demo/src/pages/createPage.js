import { getToken } from "../auth.js";
const createSection = document.querySelector('.create');
const createForm = createSection.querySelector('form');

createForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(createForm);

    let name = formData.get('name');
    let img = formData.get('img');
    let ingredients = formData.get('ingredients').split('\n');
    let steps = formData.get('steps').split('\n');

    let data = { name, img, ingredients, steps, };

    fetch('http://localhost:3030/data/recipes', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': getToken()
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(data => {
            alert('Successful recipe create!')
        })
        .catch(err => console.error(err))

});

export function renderCreate() {
    createSection.style.display = 'block';
}