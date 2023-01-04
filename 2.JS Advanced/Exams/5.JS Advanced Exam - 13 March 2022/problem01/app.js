function solve() {
    const addButton = document.getElementById('add');
    const resetButton = document.getElementById('reset');
    const listOfMealsElement = document.getElementById('list');
    const listOfSentElement = document.querySelector('.sent-list');
    const listOfDeletedMeals = document.querySelector('.delete-list');

    const recipientNameElement = document.getElementById('recipientName');
    const titleElement = document.getElementById('title');
    const messageElement = document.getElementById('message');

    addButton.addEventListener('click', (e) => {
        e.preventDefault();

        const recipient = recipientNameElement.value;
        const title = titleElement.value;
        const message = messageElement.value;

        if (!recipient || !title || !message) {
            return;
        }

        const liElement = document.createElement('li');
        liElement.innerHTML = `
            <h4>Title: ${title}</h4>
            <h4>Recipient Name: ${recipient}</h4>
            <span>${message}</span>
        <div id="list-action">
            <button type="submit" id="send">Send</button>
            <button type="submit" id="delete">Delete</button>
        </div>`;

        listOfMealsElement.appendChild(liElement);

        recipientNameElement.value = '';
        titleElement.value = '';
        messageElement.value = '';

        const sendButton = liElement.querySelector('#send');
        const deleteButton = liElement.querySelector('#delete');

        deleteButton.addEventListener('click', (e) => {
            e.preventDefault();
            const deletedLiElement = document.createElement('li');
            deletedLiElement.innerHTML = `
                    <span>To: ${recipient}</span>
                    <span>Title: ${title}</span>`;

            listOfDeletedMeals.appendChild(deletedLiElement);
            listOfMealsElement.innerHTML = '';
            liElement.remove();
        });

        sendButton.addEventListener('click', (e) => {
            e.preventDefault();
            const chosenLiElement = document.createElement('li');
            chosenLiElement.innerHTML = `
            <span>To: ${recipient}</span>
            <span>Title: ${title}</span>
            <div class="btn">
                <button type="submit" class="delete">Delete</button>
            </div>`

            listOfSentElement.appendChild(chosenLiElement);

            const deleteSentMealsButton = chosenLiElement.querySelector('.delete');
            deleteSentMealsButton.addEventListener('click', () => {
                e.preventDefault();

                const deletedLiElement = document.createElement('li');
                deletedLiElement.innerHTML = `
                    <span>To: ${recipient}</span>
                    <span>Title: ${title}</span>`;

                listOfDeletedMeals.append(deletedLiElement);
                listOfSentElement.innerHTML = '';
                chosenLiElement.remove();
            });
        });
    });

    resetButton.addEventListener('click', (e) => {
        e.preventDefault();
        recipientNameElement.value = '';
        titleElement.value = '';
        messageElement.value = '';
    })
}
solve()