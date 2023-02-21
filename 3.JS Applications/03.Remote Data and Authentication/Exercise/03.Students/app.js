const URL = 'http://localhost:3030/jsonstore/collections/students';

async function engine() {
    const tableElement = document.getElementById('results');
    const tbody = tableElement.querySelector('tbody');
    const submitButton = document.getElementById('submit');

    let students = await getStudentsHandler();
    if (students.length > 0) {
        showStudents(students);
    }

    submitButton.addEventListener('click', (e) => {
        e.preventDefault();
        checkFormDataHandler();
    });

    async function getStudentsHandler() {
        const response = await fetch(URL);
        if (response.ok) {
            const result = await response.json();
            return Object.values(result);
        } else {
            return [];
        }
    }

    async function checkFormDataHandler() {
        const form = document.getElementById('form');
        const formData = new FormData(form);

        let firstName = formData.get('firstName');
        let lastName = formData.get('lastName');
        let facultyNumber = formData.get('facultyNumber');
        let grade = formData.get('grade');

        if (firstName && lastName && facultyNumber && grade) {
            await addStudentHandler(firstName, lastName, facultyNumber, grade);

            form.querySelector('input[name="firstName"]').value = '';
            form.querySelector('input[name="lastName"]').value = '';
            form.querySelector('input[name="facultyNumber"]').value = '';
            form.querySelector('input[name="grade"]').value = '';
        }
    }

    async function addStudentHandler(firstName, lastName, facultyNumber, grade) {

        try {
            const response = await fetch(URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    firstName,
                    lastName,
                    facultyNumber,
                    grade,
                })
            });

            if (response.ok) {
                const result = await response.json();

                const row = document.createElement('tr');
                row.innerHTML = `
                <tr>
                    <th>${result.firstName}</th>       
                    <th>${result.lastName}</th>       
                    <th>${result.facultyNumber}</th>       
                    <th>${result.grade}</th>
                </tr>
            `;
                tbody.appendChild(row);
                tableElement.appendChild(tbody);
            }
        } catch (error) {
            console.error(error);
        }
    }

    function showStudents(students) {
        students.forEach(student => {
            const row = document.createElement('tr');
            row.innerHTML = `
            <tr>
                <th>${student.firstName}</th>       
                <th>${student.lastName}</th>       
                <th>${student.facultyNumber}</th>       
                <th>${student.grade}</th>
            </tr>
        `;
            tbody.appendChild(row);
        });

        tableElement.appendChild(tbody);
    }
}

window.onload = engine();