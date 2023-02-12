function solve() {
    const recipientNameElement = document.getElementById('recipientName');
    const titleElement = document.getElementById('title');
    const messageElement = document.getElementById('message');

    const listOfMeals = document.getElementById('list');
    const sendListOfMeals = document.querySelector('.sent-list');
    const deletedListOfMeals = document.querySelector('.delete-list');

    const addButton = document.getElementById('add');
    const resetButton = document.getElementById('reset');

    addButton.addEventListener('click', (e) => {
        e.preventDefault();

        const nameValue = recipientNameElement.value;
        const titleValue = titleElement.value;
        const messageValue = messageElement.value;

        if (!nameValue || !titleValue || !messageValue) {
            return;
        }

        const liElement = document.createElement('li');
        const sendLiElement = document.createElement('li');
        const deletedLiElement = document.createElement('li');

        liElement.innerHTML = `
            <h4>Title: ${titleValue}</h4>
            <h4>Recipient Name: ${nameValue}</h4>
            <span>${messageValue}</span>
            <div id="list-action">
                <button type="submit" id="send">Send</button>
                <button type="submit" id="delete">Delete</button>
            </div>
        `;

        listOfMeals.appendChild(liElement);

        recipientNameElement.value = '';
        titleElement.value = '';
        messageElement.value = '';

        const sendButton = liElement.querySelector('#send');
        const deleteButton = liElement.querySelector('#delete');

        deleteButton.addEventListener('click', (e) => {
            e.preventDefault();
            liElement.remove();

            deletedLiElement.innerHTML = `
                <li>
                    <span>To: ${nameValue}</span>
                    <span>Title: ${titleValue}</span>
                </li>
            `;
            deletedListOfMeals.appendChild(deletedLiElement);
        });

        sendButton.addEventListener('click', (e) => {
            e.preventDefault();

            liElement.remove();

            sendLiElement.innerHTML = `
                <li>
                    <span>To: ${nameValue}</span>
                    <span>Title: ${titleValue}</span>
                    <div class="btn">
                        <button type="submit" class="delete">Delete</button>
                    </div>
                </li> 
            `;
            sendListOfMeals.appendChild(sendLiElement);

            const deleteButton = sendLiElement.querySelector('.delete');

            deleteButton.addEventListener('click', (e) => {
                e.preventDefault();
                sendLiElement.remove();

                deletedLiElement.innerHTML = `
                    <li>
                        <span>To: ${titleValue}</span>
                        <span>Title: ${nameValue}</span>
                    </li>
                `;

                deletedListOfMeals.appendChild(deletedLiElement);
            });
        });

    });

    resetButton.addEventListener('click', (e) => {
        e.preventDefault();

        recipientNameElement.value = '';
        titleElement.value = '';
        messageElement.value = '';
    });
}

solve()