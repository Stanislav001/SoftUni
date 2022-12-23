function lockedProfile() {
    const buttons = Array.from(document.querySelectorAll('button'));

    function showInfo(e) {
        const profile = e.target.parentElement;
        const isLocked = profile.querySelector('div input').checked;
        let button = profile.querySelector('button');
        let more = profile.querySelector('div');

        if (!isLocked) {
            if (button.textContent == 'Show more') {
                more.style.display = 'block';
                button.textContent = 'Hide it'
            } else {
                more.style.display = 'none';
                button.textContent = 'More'
            }
        }
    }

    for (const button of buttons) {
        button.addEventListener('click', showInfo);
    }
}