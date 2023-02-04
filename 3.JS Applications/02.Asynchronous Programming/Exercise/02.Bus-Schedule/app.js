function solve() {

    const infoElement = document.querySelector('.info');
    const departButton = document.getElementById('depart');
    const arriveButton = document.getElementById('arrive');

    let stopInfo = {
        name: 'depot',
        next: 'depot'
    }

    function depart() {
        fetch(`http://localhost:3030/jsonstore/bus/schedule/${stopInfo.next}`)
            .then(res => res.json())
            .then(data => {
                stopInfo.name = data.name;
                stopInfo.next = data.next;
                infoElement.textContent = `Next stop ${data.name}`;
                departButton.disabled = true;
                arriveButton.disabled = false;
            })
            .catch(err => console.log(err))
    }

    function arrive() {
        infoElement.textContent = `Arriving at ${stopInfo.name}`;
        arriveButton.disabled = true;
        departButton.disabled = false;

    }

    return {
        depart,
        arrive
    };
}

let result = solve();