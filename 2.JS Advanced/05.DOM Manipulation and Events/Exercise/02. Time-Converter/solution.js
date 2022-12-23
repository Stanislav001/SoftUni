function attachEventsListeners() {
    Array.from(document.querySelectorAll('input[type="button"]'))
        .forEach(i => i.addEventListener('click', convert));

    let days = document.getElementById("days");
    let hours = document.getElementById("hours");
    let minutes = document.getElementById("minutes");
    let seconds = document.getElementById("seconds");

    function convert(event) {
        switch (event.target.id) {
            case 'daysBtn':
                fromDays();
                break;
            case 'hoursBtn':
                fromHours();
                break;
            case 'minutesBtn':
                fromMinutes();
                break;
            case 'secondsBtn':
                fromSeconds();
                break;
            default:
                break;
        }
    }

    function fromDays() {
        hours.value = Number(days.value) * 24;
        minutes.value = Number(hours.value) * 60;
        seconds.value = Number(minutes.value) * 60;
    }

    function fromHours() {
        days.value = Number(hours.value) / 24;
        minutes.value = Number(hours.value) * 60;
        seconds.value = Number(minutes.value) * 60;
    }

    function fromMinutes() {
        days.value = Number(minutes.value) / 1440;
        hours.value = Number(minutes.value) / 60;
        seconds.value = Number(minutes.value) * 60;
    }

    function fromSeconds() {
        days.value = Number(seconds.value) / 86400;
        hours.value = Number(seconds.value) / 3600;
        minutes.value = Number(seconds.value) / 60;
    }
}