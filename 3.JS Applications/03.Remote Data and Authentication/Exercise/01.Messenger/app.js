const submitButton = document.getElementById('submit');
const URL = 'http://localhost:3030/jsonstore/messenger';
const refreshButton = document.getElementById('refresh');
const messageElement = document.getElementById('messages');

function attachEvents() {
    getMessages();
    refreshButton.addEventListener('click', getMessages);
    submitButton.addEventListener('click', addNewMessage);
}

async function getMessages() {
    messageElement.textContent = '';
    const response = await fetch(URL);
    const data = await response.json();

    Object.values(data).forEach(message => {
        messageElement.textContent += `${message.author}: ${message.content}\n`
    });
}

async function addNewMessage() {
    const authorElement = document.getElementsByName('author')[0];
    const contentElement = document.getElementsByName('content')[0];
    const dataIsValid = checkDataHandler(authorElement?.value, contentElement?.value);

    if (!dataIsValid) {
        return;
    }

    try {
        await fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                author: authorElement.value,
                content: contentElement.value
            })
        });
        messageElement.textContent += `${authorElement.value}: ${contentElement.value}\n`
    } catch (error) {
        console.error(error);
    }
}

function checkDataHandler(author, content) {
    let isValid = true;

    if (!author || !content) {
        isValid = false;
    }

    return isValid;
}
attachEvents();