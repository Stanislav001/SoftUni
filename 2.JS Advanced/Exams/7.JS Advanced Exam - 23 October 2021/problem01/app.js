window.addEventListener('load', solve);

function solve() {
    const submitButton = document.getElementById('add-btn');

    const listOfHitsElements = document.getElementsByClassName('all-hits-container')[0];
    const savedContainerElement = document.getElementsByClassName('saved-container')[0];
    const totalLikesElement = document.getElementsByClassName('likes')[0];

    const genreElement = document.getElementById('genre');
    const nameElement = document.getElementById('name');
    const authorElement = document.getElementById('author');
    const dateElement = document.getElementById('date');
    let totalLikes = 0;

    submitButton.addEventListener('click', (e) => {
        e.preventDefault();

        const genre = genreElement.value;
        const name = nameElement.value;
        const author = authorElement.value;
        const date = dateElement.value;

        if (!genre || !name || !author || !date) {
            return;
        }

        let divElement = document.createElement('div');
        divElement.className = 'hits-info';
        divElement.innerHTML = `
            <img src="./static/img/img.png">
            <h2>Genre: ${genre}</h2>
            <h2>Name: ${name}</h2>
            <h2>Author: ${author}</h2>
            <h3>Date: ${date}</h3>
            <button class="save-btn">Save song</button>
            <button class="like-btn">Like song</button>
            <button class="delete-btn">Delete</button>
        `;

        genreElement.value = '';
        nameElement.value = '';
        authorElement.value = '';
        dateElement.value = '';

        listOfHitsElements.appendChild(divElement);

        const likeButton = divElement.querySelector('.like-btn');
        const saveButton = divElement.querySelector('.save-btn');
        const deleteButton = divElement.querySelector('.delete-btn');

        likeButton.addEventListener('click', (e) => {
            totalLikes += 1;
            let pElement = totalLikesElement.getElementsByTagName('p')[0];
            pElement.textContent = `Total Likes: ${totalLikes}`;
            likeButton.disabled = true;
        });

        saveButton.addEventListener('click', () => {
            likeButton.remove();
            saveButton.remove();
            savedContainerElement.appendChild(divElement);
        });

        deleteButton.addEventListener('click', () => {
            divElement.remove();
        });
    });
}