import { getRecipes } from "../api.js";

const homeSection = document.querySelector('.home');
const listOfItems = document.querySelector('.recipe-list');

export function renderHome() {
    getRecipes()
        .then(data => {
            renderRecipes(Object.values(data));
            homeSection.style.display = 'block';
        })
        .catch(err => console.error(err))
}

function renderRecipes(recipes) {
    const fragment = document.createDocumentFragment();

    recipes.forEach(recipe => {
        fragment.appendChild(renderRecipe(recipe))
    });

    listOfItems.innerHTML = '';
    listOfItems.appendChild(fragment);
}


function renderRecipe(recipe) {
    const recipeElement = document.createElement('article');
    recipeElement.classList.add('preview');

    recipeElement.innerHTML = `
        <div class="title">
            <h2>${recipe.name}</h2>
        </div>
        <div class="small">
            <img src="${recipe.img}">
        </div>
    `;
    return recipeElement;
}