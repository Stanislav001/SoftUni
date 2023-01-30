function validate() {
    document.getElementById('company').addEventListener('change', showCompanyInfo);
    document.getElementById('submit').addEventListener('click', getValidate);

    function showCompanyInfo(event) {
        let companyInfo = document.getElementById('companyInfo');
        if (event.target.checked) {
            companyInfo.style.display = 'block';
        } else {
            companyInfo.style.display = 'none';
        }
    }

    function getValidate(e) {
        e.preventDefault();

        const [username, email, password, confirmPassword, company, companyNumber] = document.querySelectorAll('input');
        const userNamePattern = /^[A-Za-z0-9]{3,20}$/;
        const emailPattern = /(.*)@(.*){1,}\.(.*){1,}/;
        const passPattern = /^[\w]{5,15}$/;
        const companyPattern = /^[0-9]{4}$/;

        const elements = [];

        if (!userNamePattern.test(username.value)) {
            elements.push(username);
        }

        if (!emailPattern.test(email.value)) {
            elements.push(email);
        }

        if (!passPattern.test(password.value)) {
            elements.push(password);
        }

        if (!passPattern.test(confirmPassword.value) || password.value !== confirmPassword.value) {
            elements.push(confirmPassword);
        }

        if (company.checked && !companyPattern.test(companyNumber.value)) {
            elements.push(companyNumber);
        }

        elements.forEach(e => invalid(e));
        (!elements.length)
            ? document.getElementById('valid').style.display = 'block'
            : document.getElementById('valid').style.display = 'none';

        function invalid(element) {
            element.style.borderColor = 'red';
        }
    }
}