// Employee Management System with Department Grouping and Reporting
class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }
    describe() {
        return `${this.name} works in the ${this.department} department.`;
    }
}
 // Extending the Employee class to create a Manager class
class Manager extends Employee {
    constructor(name, department, teamSize) {
        super(name, department);
        this.teamSize = teamSize;
    }
    describe() {
        return `${super.describe()} They manage a team of ${this.teamSize} people.`;
    }
}
// Company class to manage employees and generate reports
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

    // Groups employees by department
    getAllEmployeesFiltered() {
        return Object.groupBy(this.employees, emp => emp.department);
    }

    // Generates a formatted report of employees grouped by department
    getFormattedDepartmentReport() {
        const grouped = this.getAllEmployeesFiltered();
        let report = `=== ${this.name} Department Report ===\n`;

        for (const [dept, staff] of Object.entries(grouped)) {
            report += `\n[ ${dept} Department ] (${staff.length} staff)\n`;
            // Using map to create a formatted string for each employee
            report += staff.map(emp => `  • ${emp.describe()}`).join("\n") + "\n";
        }

        return report;
    }
}
// Example usage of the Employee Management System
// Creating instances of Manager and Employee
const manager1 = new Manager("Bob", "Sales", 5);
const manager2 = new Manager("Diana", "HR", 3);
const employee1 = new Employee("Alice", "Engineering");
const employee2 = new Employee("Charlie", "Marketing");
const employee3 = new Employee("David", "Sales");
// Creating a company instance and adding employees
const company = new Company("Tech Solutions");
company.addEmployee(employee1);
company.addEmployee(employee2);
company.addEmployee(employee3);
company.addEmployee(manager1);
company.addEmployee(manager2);

console.log(company.getFormattedDepartmentReport());
