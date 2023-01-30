window.addEventListener('load', solve);

function solve() {
    const firstNameElement = document.getElementById('first-name');
    const lastNameElement = document.getElementById('last-name');
    const startDateElement = document.getElementById('date-in');
    const endDateElement = document.getElementById('date-out');
    const numberOfPeoplesElement = document.getElementById('people-count');

    const nextButton = document.getElementById('next-btn');
    const verificationElement = document.getElementById('verification');

    const reservationList = document.querySelector('.info-list');
    const confirmList = document.querySelector('.confirm-list');

    nextButton.addEventListener('click', (e) => {
        e.preventDefault();

        const firstNameValue = firstNameElement.value;
        const lastNameValue = lastNameElement.value;
        const startDateValue = startDateElement.value;
        const endDateValue = endDateElement.value;
        const numberOfPeoples = numberOfPeoplesElement.value;

        const dateIsValid = new Date(endDateValue).getTime() >= new Date(startDateValue).getTime();

        if (!firstNameValue || !lastNameValue || !startDateValue || !endDateValue || !numberOfPeoples || !dateIsValid) {
            return;
        }
        nextButton.disabled = true;

        const liElement = document.createElement('li');
        liElement.className = 'reservation-content';
        const articleElement = document.createElement('article');

        articleElement.innerHTML = `
            <article>
                <h3>Name: ${firstNameValue} ${lastNameValue}</h3>
                <p>From date: ${startDateValue}</p>
                <p>To date: ${endDateValue}</p>
                <p>For ${numberOfPeoples} people</p>
            </article>  
            <button class="edit-btn">Edit</button>
            <button class="continue-btn">Continue</button>
        `;

        firstNameElement.value = '';
        lastNameElement.value = '';
        startDateElement.value = '';
        endDateElement.value = '';
        numberOfPeoplesElement.value = '';

        liElement.appendChild(articleElement);
        reservationList.appendChild(liElement);

        const editButton = liElement.querySelector('.edit-btn');
        const continueButton = liElement.querySelector('.continue-btn');

        editButton.addEventListener('click', () => {
            nextButton.disabled = false;

            firstNameElement.value = firstNameValue;
            lastNameElement.value = lastNameValue;
            startDateElement.value = startDateValue;
            endDateElement.value = endDateValue;
            numberOfPeoplesElement.value = numberOfPeoples;

            reservationList.innerHTML = '';
        });

        continueButton.addEventListener('click', () => {
            nextButton.disabled = false;
            const reservationLiElement = document.createElement('li');
            reservationLiElement.className = 'reservation-content';

            const reservationArticleElement = document.createElement('article');

            reservationArticleElement.innerHTML = `
                <article>
                    <h3>Name: ${firstNameValue + lastNameValue}</h3>
                    <p>From date: ${startDateValue}</p>
                    <p>To date: ${endDateValue}</p>
                    <p>For ${numberOfPeoples} people</p>
                    </article>
                <button class="confirm-btn">Confirm</button>
                <button class="cancel-btn">Cancel</button>
                `;

            reservationLiElement.appendChild(reservationArticleElement);
            confirmList.appendChild(reservationLiElement);
            reservationList.innerHTML = '';

            const confirmButton = reservationLiElement.querySelector('.confirm-btn');
            const cancelButton = reservationLiElement.querySelector('.cancel-btn');

            confirmButton.addEventListener('click', () => {
                nextButton.disabled = false;
                confirmList.innerHTML = '';

                verificationElement.className = 'reservation-confirmed';
                verificationElement.textContent = `Confirmed.`
            });

            cancelButton.addEventListener('click', () => {
                nextButton.disabled = false;
                confirmList.innerHTML = '';
                verificationElement.className = 'reservation-cancelled';
                verificationElement.textContent = `Cancelled.`
            })
        });
    });
}