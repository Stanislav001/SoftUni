class Company {
    constructor() {
        this.departments = new Map();
    }

    addEmployee(name, salary, position, department) {
        const employee = {
            name,
            salary,
            position,
            department
        };

        if (!name || !salary || salary < 0 || !position || !department) {
            throw new Error('Invalid input!');
        }

        if (this.departments.has(department)) {
            this.departments.get(department).push(employee);
        } else {
            this.departments.set(department, [employee]);
        }

        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }

    bestDepartment() {
        let totalSalary = (department) => {
            let totalSalary = department[1].reduce((acc, b) => { return acc += b.salary }, 0);
            let averageSalary = (totalSalary / department[1].length).toFixed(2);
            department.push(averageSalary);
            return averageSalary;
        };

        let bestDepartment = [...this.departments].sort((a, b) => totalSalary(b) - totalSalary(a))[0];
        let sortBySalaryAndName = bestDepartment[1].sort((a, b) => b.salary - a.salary || a.name.localeCompare(b.name));

        let result = `Best Department is: ${bestDepartment.shift()}\n`;
        result += `Average salary: ${bestDepartment.pop()}\n`;
        sortBySalaryAndName.forEach(e => result += `${e.name} ${e.salary} ${e.position}\n`);

        return result.trim();
    }
}

let company = new Company();
company.addEmployee("Stanimir", 2000, "engineer", "Construction");
company.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
company.addEmployee("Slavi", 500, "dyer", "Construction");
company.addEmployee("Stan", 2000, "architect", "Construction");
company.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
company.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
company.addEmployee("Gosho", 1350, "HR", "Human resources");

console.log(company.bestDepartment());