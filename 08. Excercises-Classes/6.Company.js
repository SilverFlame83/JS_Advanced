class Company {
    constructor() {
        this.departments = [];
    }

    addEmployee(username, salary, position, department) {
        if ([...arguments].some(a => a === null || a === undefined || a === '') || salary < 0) {
            throw new Error('Invalid input!');
        } else {
            const employeelist = {
                username: username,
                salary: salary,
                position: position,
                department: department,
            };
            if (this.departments.filter(function (e) { return e.name === department; }).length > 0) {
                for (let currentDepartment of this.departments) {
                    if (currentDepartment.name === department) {
                        currentDepartment.users.push(employeelist);
                        currentDepartment.totalSalary += salary;
                    }
                }
            } else {
                let newDepartment = {
                    name: department,
                    users: [employeelist],
                    totalSalary: salary,
                    averageSalary() {
                        return this.totalSalary / this.users.length;
                    },
                };
                this.departments.push(newDepartment);
            }
            return `New employee is hired. Name: ${username}. Position: ${position}`;
        }
    }

    bestDepartment() {
        let bestDepart = this.departments.sort((a, b) => a.averageSalary - b.averageSalary)[0];
        bestDepart.users = bestDepart.users.sort(function (a, b) {
            if (a.username === b.username) {
                // Price is only important when cities are the same
                return b.username - a.username;
            }
            return a.salary < b.salary ? 1 : -1;
        });
        let result = `Best Department is: ${bestDepart.name}\nAverage salary: ${bestDepart.averageSalary().toFixed(2)}`;
        for (let user of bestDepart.users) {
            result += `\n${user.username} ${user.salary} ${user.position}`;
        }
        return result;
    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
