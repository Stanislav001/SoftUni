function validate() {
    document.getElementById('email').addEventListener('change', validation);

    function validation(event) {
        const email = event.target;
        const emailReg = new RegExp(/[a-z]+\@[a-z]+\.[a-z]+/gm);

        if (emailReg.test(email.value)) {
            email.classList.remove('error');
        }
        else {
            email.classList = 'error';
        }
    }
}