function attachEvents() {
    const submitButton = document.getElementById('submit');
    const locationInputElement = document.getElementById('location');

    submitButton.addEventListener('click', () => {
        getLocationInfo();

    });


    async function getLocationInfo() {
        try {
            const userInput = locationInputElement.value;
            const currentInfoElement = document.getElementById('current');

            const locations = await request('http://localhost:3030/jsonstore/forecaster/locations');
            const city = locations.find(c => c.name == userInput);

            if (city) {
                const todayCityForecast = await request(`http://localhost:3030/jsonstore/forecaster/today/${city.code}`);
                const { condition, high, low } = todayCityForecast.forecast;

                const divForecasts = document.createElement('div');
                divForecasts.classList.add('forecasts');

                let spanSymbol = createSymbolElement(condition, 'condition', 'symbol');
                divForecasts.appendChild(spanSymbol);

                const spanCondition = document.createElement('span');
                spanCondition.classList.add('condition');
                spanCondition.innerHTML = `
                <span class="forecast-data">${todayCityForecast.name}</span>
                <span class="forecast-data">${low}&#176;/${high}&#176;</span>
                <span class="forecast-data">${condition}</span>
            `;

                divForecasts.appendChild(spanCondition);;
                current.appendChild(divForecasts);

                forecast.removeAttribute('style');
                console.log(cityInfo);
            }

        } catch (error) {
            console.log(error);
        }

    }

    async function request(url) {
        let result = {};

        try {
            const response = await fetch(url);

            if (response.status != 200) {
                throw new Error('Error');
            }

            const data = await response.json();

            result = data;
        } catch (error) {
            result = 'Error';
        }

        return result;
    }

    function createSymbolElement(condition, class1, class2) {
        const span = document.createElement('span');
        span.classList.add(class1);

        if (class2 != undefined) {
            span.classList.add(class2);
        }

        switch (condition) {
            case 'Sunny':
                span.textContent = '☀'
                break;
            case 'Partly sunny':
                span.textContent = '⛅'
                break;
            case 'Overcast':
                span.textContent = '☁'
                break;
            case 'Rain':
                span.textContent = '☔'
                break;
            default:
                break;
        }

        return span;
    }
}

attachEvents();