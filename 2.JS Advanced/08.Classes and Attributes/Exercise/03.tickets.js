function tickets(array, sortedCriteria) {
    const result = [];

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }

    for (const ticket of array) {
        const [destination, price, status] = ticket.split('|');
        result.push(new Ticket(destination, price, status));
    }

    if (sortedCriteria == 'destination') {
        result.sort((a, b) => a.destination.localeCompare(b.destination));
    } else if (sortedCriteria == 'price') {
        result.sort((a, b) => a.price - b.price);
    } else if (sortedCriteria == 'status') {
        result.sort((a, b) => a.status.localeCompare(b.status));
    }

    return result;
}

console.log(tickets(['Philadelphia|94.20|available', 'New York City|95.99|available', 'New York City|95.99|sold', 'Boston|126.20|departed'], 'destination'));
