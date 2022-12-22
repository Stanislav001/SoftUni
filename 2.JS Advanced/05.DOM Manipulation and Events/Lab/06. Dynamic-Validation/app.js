function validate() {
    document.getElementById('email').addEventListener('change', onChange);

    function onChange(event) {
        const email = event.target;
        const emailReg = new RegExp(/[a-z]+\@[a-z]+\.[a-z]/);

        if (emailReg.test(email.value)) {
            // email.className = 'success';
            email.className = '';
        } else {
            email.className = 'error';
        }
    }
}