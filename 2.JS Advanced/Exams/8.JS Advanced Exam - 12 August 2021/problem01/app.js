window.addEventListener('load', solve);

function solve() {
    const modelElement = document.getElementById('model');
    const yearElement = document.getElementById('year');
    const priceElement = document.getElementById('price');
    const descriptionElement = document.getElementById('description');

    const addButtonElement = document.getElementById('add');
    const totalPriceElement = document.getElementsByClassName('total-price')[0];

    addButtonElement.addEventListener('click', (e) => {
        e.preventDefault();

        //* Set value in constants
        const modelValue = modelElement.value;
        const yearValue = yearElement.value;
        const priceValue = Number(priceElement.value).toFixed(2);
        const descriptionValue = descriptionElement.value;

        //* Validate input fields
        if (!modelValue || !descriptionValue || yearValue < 1 || priceValue < 1) {
            return;
        }

        //* Create a table with content of form
        const thbody = document.getElementById('furniture-list');
        const row = document.createElement('tr');
        row.className = 'info';

        const modelTd = document.createElement('td');
        const priceTd = document.createElement('td');

        modelTd.textContent = modelValue;
        priceTd.textContent = priceValue;

        const actions = document.createElement('td');
        const moreInfoButton = document.createElement('button');
        const buyButton = document.createElement('button');
        moreInfoButton.className = 'moreBtn';
        buyButton.className = 'buyBtn';
        moreInfoButton.textContent = 'More Info';
        buyButton.textContent = 'Buy it';

        //* Append buttons to action td
        actions.appendChild(moreInfoButton);
        actions.appendChild(buyButton);

        //* Append all td to row
        row.appendChild(modelTd);
        row.appendChild(priceTd);
        row.appendChild(actions);

        //* Hidden row
        const hiddenRow = document.createElement('tr');
        hiddenRow.className = 'hide';

        const yearTd = document.createElement('td');
        const descriptionTd = document.createElement('td');
        descriptionTd.colSpan = 3;

        yearTd.textContent = `Year: ${yearValue}`;
        descriptionTd.textContent = `Description: ${descriptionValue}`;

        //* Append hidden elements to hidden row
        hiddenRow.appendChild(yearTd);
        hiddenRow.appendChild(descriptionTd);

        //* Append rows to thbody
        thbody.appendChild(row);
        thbody.appendChild(hiddenRow);

        //* Reset form values
        modelElement.value = '';
        yearElement.value = '';
        priceElement.value = '';
        descriptionElement.value = '';

        //* More info button functionality
        moreInfoButton.addEventListener('click', (e) => {
            e.preventDefault();
            
            if (moreInfoButton.textContent === 'More Info') {
                hiddenRow.style = `display: contents;`;
                moreInfoButton.textContent = 'Less Info';
            } else {
                hiddenRow.style = `display: none;`;
                moreInfoButton.textContent = 'More Info';
            }
        });

        //* Buy button functionality
        buyButton.addEventListener('click', () => {
            e.preventDefault();
            const totalPrice = totalPriceElement.textContent;
            totalPriceElement.textContent = (Number(totalPrice) + Number(priceValue)).toFixed(2);
            hiddenRow.remove();
            row.remove();
        });
    });
}