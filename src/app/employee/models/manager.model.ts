import { Employee, EmployeeOptions, EmployeeType } from "../interfaces/employee.interface";

export class Manager implements Employee {
    type: EmployeeType = 'Manager';
    name: string;
    salary: number;
    options: EmployeeOptions;

    constructor(name: string, salary: number, options: EmployeeOptions) {
        this.name = name;
        this.salary = salary;
        this.options = {
            department: options.department,
        };
    }
}