const observer = require('./observer');

function subscribe() {
    observer.on('alert', (data) => {
        console.log('Event receiver');
        console.log(data);
    });
}

subscribe();