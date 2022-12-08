function solve(input) {
    numberOfStudents = Number(input.shift());
    numberOfLectures = Number(input.shift());
    additionalBonus = Number(input.shift());

    studentsAttendance = input.map(Number);

    let maxAttendance = Math.max(...studentsAttendance)
    let maxBonus = (maxAttendance / numberOfLectures) * (5 + additionalBonus);

    console.log(`Max Bonus: ${Math.ceil(maxBonus)}.`);
    console.log(`The student has attended ${maxAttendance} lectures.`);
}

solve(['5', '25', '30', '12', '19', '24', '16', '20']);
console.log('---');
solve(['10', '30', '14', '8', '23', '27', '28', '15', '17', '25', '26', '5', '18'])