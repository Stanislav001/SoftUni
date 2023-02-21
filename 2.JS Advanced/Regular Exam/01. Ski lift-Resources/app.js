window.addEventListener('load', solve);

function solve() {
    const firstNameElement = document.getElementById('first-name');
    const lastNameElement = document.getElementById('last-name');
    const peopleCountElement = document.getElementById('people-count');
    const fromDateElement = document.getElementById('from-date');
    const daysCountElement = document.getElementById('days-count');

    const bodyElement = document.getElementById('body');
    const mainElement = document.getElementById('main');
    const confirmTicketList = document.querySelector('.confirm-ticket');
    const ticketInfoListList = document.querySelector('.ticket-info-list');

    const nextStepButton = document.getElementById('next-btn');

    nextStepButton.addEventListener('click', (e) => {
        e.preventDefault();
        const firstNameValue = firstNameElement.value;
        const lastNameValue = lastNameElement.value;
        const peopleCountValue = peopleCountElement.value;
        const fromDateValue = fromDateElement.value;
        const daysCountValue = daysCountElement.value;


        if (!firstNameValue || !lastNameValue || !peopleCountValue || !fromDateValue || !daysCountValue) {
            return;
        }

        const liElement = document.createElement('li');
        liElement.className = 'ticket';
        const article = document.createElement('article');

        article.innerHTML = `
            <h3>Name: ${firstNameValue} ${lastNameValue}</h3>
            <p>From date: ${fromDateValue}</p>
            <p>For ${daysCountValue} days</p>
            <p>For ${peopleCountValue} people</p>
            `;
        const editButton = document.createElement('button');
        const continueButton = document.createElement('button');

        editButton.textContent = 'Edit';
        continueButton.textContent = 'Continue';

        editButton.classList.add("edit-btn");
        continueButton.classList.add("continue-btn");

        liElement.appendChild(article);
        liElement.appendChild(editButton);
        liElement.appendChild(continueButton);
        ticketInfoListList.appendChild(liElement);

        nextStepButton.disabled = true;

        firstNameElement.value = '';
        lastNameElement.value = '';
        peopleCountElement.value = '';
        fromDateElement.value = '';
        daysCountElement.value = '';


        editButton.addEventListener('click', (e) => {
            e.preventDefault();
            firstNameElement.value = firstNameValue;
            lastNameElement.value = lastNameValue;
            peopleCountElement.value = peopleCountValue;
            fromDateElement.value = fromDateValue;
            daysCountElement.value = daysCountValue;

            nextStepButton.disabled = false;
            liElement.remove();
        });

        continueButton.addEventListener('click', (e) => {
            e.preventDefault();

            liElement.remove();
            const confirmLiElement = document.createElement('li');
            confirmLiElement.className = 'ticket+content';

            const article = document.createElement('article');

            article.innerHTML = `
                <h3>Name: ${firstNameValue} ${lastNameValue}</h3>
                <p>From date: ${fromDateValue}</p>
                <p>For ${daysCountValue} days</p>
                <p>For ${peopleCountValue} people</p>
                `;
            const confirmButton = document.createElement('button');
            const cancelButton = document.createElement('button');

            confirmButton.textContent = 'Confirm';
            cancelButton.textContent = 'Cancel';

            confirmButton.classList.add("confirm-btn");
            cancelButton.classList.add("cancel-btn");

            confirmLiElement.appendChild(article);
            confirmLiElement.appendChild(confirmButton);
            confirmLiElement.appendChild(cancelButton);
            confirmTicketList.appendChild(confirmLiElement);

            cancelButton.addEventListener('click', (e) => {
                e.preventDefault();
                confirmLiElement.remove();
                nextStepButton.disabled = false;
            });

            confirmButton.addEventListener('click', (e) => {
                e.preventDefault();

                mainElement.remove();
                const h1Element = document.createElement('h1');
                h1Element.textContent = 'Thank you, have a nice day!';
                const backButton = document.createElement('button');
                backButton.textContent = 'Back';

                h1Element.setAttribute('id', 'thank-you');
                backButton.setAttribute('id', 'back-btn');

                bodyElement.appendChild(h1Element);
                bodyElement.appendChild(backButton);

                backButton.addEventListener('click', (e) => {
                    window.location.reload();
                });
            });
        });
    });
}