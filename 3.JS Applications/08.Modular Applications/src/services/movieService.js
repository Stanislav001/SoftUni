const baseUrl = 'http://localhost:3030/data/movies';

export const getAll = (searchValue) => {
    let queryString = '';
    if (searchValue) {
        queryString = '?where=' + encodeURIComponent(`title LIKE "${searchValue}"`);
    }

    return fetch(baseUrl + queryString)
        .then(res => res.json())
}

export const getOne = (movieId) => {
    return fetch(`${baseUrl}/${movieId}`)
        .then(res => res.json());
}