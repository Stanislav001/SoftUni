function addItem() {
    const listOfItemsElement = document.getElementById('items');
    const userInputElement = document.getElementById('newItemText');

    const newItemElement = document.createElement('li');
    newItemElement.innerHTML = userInputElement.value;

    listOfItemsElement.appendChild(newItemElement);
}