window.addEventListener('load', solve);

function solve() {
    const sendFormButton = document.getElementById('main-container').querySelectorAll('button')[0];
    const clearButton = document.getElementsByClassName('clear-btn')[0];

    const receivedOrdersList = document.getElementById('received-orders');
    const completedOrdersList = document.getElementById('completed-orders');

    const typeProductElement = document.getElementById('type-product');
    const descriptionElement = document.getElementById('description');
    const clientNameElement = document.getElementById('client-name');
    const clientPhoneElement = document.getElementById('client-phone');

    sendFormButton.addEventListener('click', (e) => {
        e.preventDefault();

        const productValue = typeProductElement.value;
        const clientNameValue = clientNameElement.value;
        const clientPhoneValue = clientPhoneElement.value;
        const descriptionValue = descriptionElement.value;

        if (!descriptionValue || !clientNameValue || !clientPhoneValue) {
            return;
        }

        const currentElementContext = document.createElement('div');
        currentElementContext.className = 'container';
        currentElementContext.innerHTML = `
            <h2>Product type for repair: ${productValue}</h2>
            <h3>Client information: ${clientNameValue} ${clientPhoneValue}</h3>
            <h4>Description of the problem: ${descriptionValue}</h4>
            <button class="start-btn">Start repair</button>
            <button class="finish-btn" disabled>Finish repair</button>
            `;
        receivedOrdersList.appendChild(currentElementContext);

        const startRepairButton = currentElementContext.querySelector('.start-btn');
        const finishRepairButton = currentElementContext.querySelector('.finish-btn');


        typeProductElement.value = '';
        descriptionElement.value = '';
        clientNameElement.value = '';
        clientPhoneElement.value = '';

        startRepairButton.addEventListener('click', () => {
            startRepairButton.disabled = true;
            finishRepairButton.disabled = false;
        });

        finishRepairButton.addEventListener('click', () => {
            startRepairButton.remove();
            finishRepairButton.remove();

            completedOrdersList.appendChild(currentElementContext);
        });

    });

    clearButton.addEventListener('click', () => {
        const containers = Array.from(completedOrdersList.querySelectorAll('#completed-orders .container'));

        containers.forEach(div => {
            div.remove();
        });
    });
}