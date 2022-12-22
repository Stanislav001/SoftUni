function focused() {
    Array.from(document.querySelectorAll('input'))
        .forEach(e => {
            e.addEventListener('focus', (e) => {
                e.target.parentElement.classList.add('focused');
            });
            e.addEventListener('blur', (e) => {
                e.target.parentElement.classList.remove('focused');
            });
        });
}