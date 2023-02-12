function solve() {
    const fnameElement = document.getElementById('fname');
    const lnameElement = document.getElementById('lname');
    const emailElement = document.getElementById('email');
    const birthElement = document.getElementById('birth');
    const salaryElement = document.getElementById('salary');
    const positionElement = document.getElementById('position');

    const sum = document.getElementById('sum');
    const tbodyElement = document.getElementById('tbody');
    const addButton = document.getElementById('add-worker');

    addButton.addEventListener('click', (e) => {
        e.preventDefault();

        const fnameValue = fnameElement.value;
        const lnameValue = lnameElement.value;
        const emailValue = emailElement.value;
        const birthValue = birthElement.value;
        const positionValue = positionElement.value;
        const salaryValue = salaryElement.value;

        if (!fnameValue || !lnameValue || !emailValue || !birthValue || !positionValue || !salaryValue) {
            return;
        }

        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${fnameValue}</td>
            <td>${lnameValue}</td>
            <td>${emailValue}</td>
            <td>${birthValue}</td>
            <td>${positionValue}</td>
            <td>${salaryValue}</td>
            <td>
                <button class="fired">Fired</button>
                <button class="edit">Edit</button>
            </td>
        `;
        tbodyElement.appendChild(tr);

        sum.textContent = ((Number(sum.textContent)) + Number(salaryValue)).toFixed(2);

        //* Reset form values
        fnameElement.value = '';
        lnameElement.value = '';
        emailElement.value = '';
        birthElement.value = '';
        positionElement.value = '';
        salaryElement.value = '';

        const editButton = tr.querySelector('.edit');
        const firedButton = tr.querySelector('.fired');

        editButton.addEventListener('click', (e) => {
            e.preventDefault();

            fnameElement.value = fnameValue;
            lnameElement.value = lnameValue;
            emailElement.value = emailValue;
            birthElement.value = birthValue;
            positionElement.value = positionValue;
            salaryElement.value = salaryValue;

            tr.remove();
            sum.textContent = ((Number(sum.textContent)) - Number(salaryValue)).toFixed(2);
        });

        firedButton.addEventListener('click', (e) => {
            e.preventDefault();

            tr.remove();
            sum.textContent = ((Number(sum.textContent)) - Number(salaryValue)).toFixed(2);
        });
    });
}
solve()