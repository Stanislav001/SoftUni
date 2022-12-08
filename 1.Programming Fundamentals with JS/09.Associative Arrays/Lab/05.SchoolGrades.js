function solve(param) {
    let grades = {};

    for (let el of param) {
        let elements = el.split(' ');
        let name = elements.shift();
        let schoolGrades = elements.map(Number);
        let averageGrade = calculatingSuccess(schoolGrades);

        if (!(grades.hasOwnProperty(name))) {
            grades[name] = averageGrade
        } else {
           
        }
    }

    let sorted = Object.entries(grades);
    sorted.sort((first, second) => {
        const firstName = first[0];
        const secondName = second[0];

        return firstName.localeCompare(secondName);
    });

    for (const line of sorted) {
        console.log(line[0], line[1]);
    }

    function calculatingSuccess(grades) {
        let sumOfAllGrades = 0;

        for (const grade of grades) {
            sumOfAllGrades += Number(grade);
        }
        const result = (sumOfAllGrades / grades.length).toFixed(2);

        return result;
    }
}

solve(['Lilly 4 6 6 5', 'Tim 5 6', 'Tammy 2 4 3', 'Tim 6 6']);
console.log('---');
solve(['Steven 3 5 6 4', 'George 4 6', 'Tammy 2 5 3', 'Steven 6 3']);