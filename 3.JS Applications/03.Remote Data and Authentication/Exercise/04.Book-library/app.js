const URL = 'http://localhost:3030/jsonstore/collections/books';

function engine() {
    const tableElement = document.querySelector('table');
    const tBody = tableElement.querySelector('tbody');
    const loadBookButton = document.getElementById('loadBooks');

    loadBookButton.addEventListener('click', (e) => {
        e.preventDefault();
        getAllBooksHandler()
    });

    async function getAllBooksHandler() {
        console.log('test');
        const response = await fetch(URL);
        if (response.ok) {
            const data = await response.json();
            await loadAllBooks(Object.values(data))
        }
    }

    function loadAllBooks(books) {
        books.forEach(book => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${book.title}</td>
                <td>${book.author}</td>
                <td>
                    <button>Edit</button>
                    <button>Delete</button>
                </td>
            `;
            tBody.appendChild(tr);
        });

        //tBody.replaceChildren();
        tableElement.appendChild(tBody);
    }
}

window.onload = engine();