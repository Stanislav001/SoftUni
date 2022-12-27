function filterEmployees(input, finder) {
    const data = JSON.parse(input);
    const [key, value] = finder.split('-');
    let employees = data.filter(e => e[key] == value);

    for (let i = 0; i < employees.length; i++) {
        let fullName = `${employees[i].first_name} ${employees[i].last_name}`;

        console.log(`${i}. ${fullName} - ${employees[i].email}`);
    }
}

filterEmployees(`[
    {
        "id": "1",
        "first_name": "Ardine",
        "last_name": "Bassam",
        "email": "abassam0@cnn.com",
        "gender": "Female"
    },
    {   
        "id": "2",
        "first_name": "Kizzee",
        "last_name": "Jost",
        "email": "kjost1@forbes.com",
        "gender": "Female"
    },  
    { 
        "id": "3",
        "first_name": "Evanne",
        "last_name": "Maldin",
        "email": "emaldin2@hostgator.com",
        "gender": "Male"
    }
]`, 'gender-Female');
