const URL = 'http://localhost:3030/jsonstore/phonebook';

const phoneBookElement = document.getElementById('phonebook');

function attachEvents() {
    const loadButton = document.getElementById('btnLoad');
    const createButton = document.getElementById('btnCreate');

    loadButton.addEventListener('click', () => {getDataHandler()});
    createButton.addEventListener('click', addNewPhoneHandler);
}

async function getDataHandler() {
    phoneBookElement.innerHTML = '';
    const response = await fetch(URL);

    if (response.ok) {
        let data = await response.json();
        Object.values(data).forEach(el => {
            const liElement = document.createElement('li');
            const deleteButton = document.createElement('button');
    
            liElement.textContent = `${el.person}: ${el.phone}`;
            deleteButton.innerHTML = 'Delete';
            deleteButton.setAttribute('id', el._id);
    
            liElement.appendChild(deleteButton);
            phoneBookElement.appendChild(liElement);
    
            deleteButton.addEventListener('click', deletePhoneHandler);
        });
    }
}

async function addNewPhoneHandler() {
    const phoneValue = document.getElementById('phone').value;
    const personValue = document.getElementById('person').value;
    const dataIsValid = checkDataHandler(phoneValue, personValue);

    if (!dataIsValid) {
        return;
    }

    try {
        const response = await fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                person: personValue,
                phone: phoneValue
            })
        });

        if (response.ok) {
            const result = await response.json();

            const liElement = document.createElement('li');
            const deleteButton = document.createElement('button');

            liElement.textContent = `${result.person}: ${result.phone}`;
            deleteButton.innerHTML = 'Delete';
            deleteButton.setAttribute('id', result._id);

            liElement.appendChild(deleteButton);
            phoneBookElement.appendChild(liElement);

            deleteButton.addEventListener('click', deletePhoneHandler);
        }
    } catch (error) {
        console.error(error);
    }
}

async function deletePhoneHandler(event) {
    const id = event.target.parentNode.id;
    event.target.parentNode.remove();

    const response = await fetch(`${URL}/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json'
        }
    });
}

function checkDataHandler(person, phone) {
    let isValid = true;
    if (!person || !phone) {
        isValid = false;
    }
    return isValid;
}

attachEvents();