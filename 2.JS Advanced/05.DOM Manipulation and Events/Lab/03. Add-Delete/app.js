function addItem() {
    const userInputElement = document.getElementById('newItemText');
    const listOfItemsElement = document.getElementById('items');

    const currentItemElement = document.createElement('li');
    const currentItemLinkElement = document.createElement('a');

    currentItemLinkElement.textContent = '[Delete]';
    currentItemLinkElement.href = '#';
    currentItemElement.innerHTML = userInputElement.value;

    currentItemElement.appendChild(currentItemLinkElement);
    listOfItemsElement.appendChild(currentItemElement);

    userInputElement.value = '';

    currentItemElement.addEventListener('click', (e) => {
        event.target.parentElement.remove();
    });
}