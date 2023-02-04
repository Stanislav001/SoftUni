function getInfo() {
    const inputElement = document.getElementById('stopId');
    const submitButton = document.getElementById('submit');

    submitButton.addEventListener('click', (e) => {
        e.preventDefault();
        const userInput = inputElement.value;

        fetch(`http://localhost:3030/jsonstore/bus/businfo/${userInput}`)
            .then(response => response.json())
            .then(data => {
                renderResult(data);
            })
            .catch(err => {
                const busNameElement = document.getElementById('stopName');
                busNameElement.textContent = 'Error';
            });


    });

    function renderResult(data) {
        const busesList = document.getElementById('buses');
        const busNameElement = document.getElementById('stopName');
        const busesData = Object.entries(data.buses);

        busNameElement.textContent = data.name

        busesData.forEach(el => {
            const liElement = document.createElement('li');

            liElement.textContent = `Bus ${el[0]} arrives in ${el[1]} minutes`;
            busesList.appendChild(liElement);
        });
    }
}