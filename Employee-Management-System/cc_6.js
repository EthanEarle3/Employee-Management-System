class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }
    describe() {
        return `${this.name} works in the ${this.department} department.`;
    }
}
class Manager extends Employee {
    constructor(name, department, teamSize) {
        super(name, department);
        this.teamSize = teamSize;
    }
    describe() {
        return `${super.describe()} They manage a team of ${this.teamSize} people.`;
    }
}
const manager1 = new Manager("Bob", "Sales", 5);
const manager2 = new Manager("Diana", "HR", 3);
const employee2 = new Employee("Charlie", "Marketing");
const employee1 = new Employee("Alice", "Engineering");

class Company {
    constructor(name) {
        this.name = name;
        this.employees = [];
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    listEmployees() {
        return this.employees.map(emp => emp.describe()).join("\n");
    }
}
const company = new Company("Tech Solutions");
company.addEmployee(employee1);
company.addEmployee(employee2);
company.addEmployee(manager1);
company.addEmployee(manager2);

console.log(employee1.describe());
console.log(manager1.describe());
console.log(manager2.describe());
console.log("\nCompany Employees:");
console.log(company.listEmployees());