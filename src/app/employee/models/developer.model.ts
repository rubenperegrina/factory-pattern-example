import { Employee, EmployeeOptions, EmployeeType } from "../interfaces/employee.interface";

export class Developer implements Employee {
    type: EmployeeType = 'Developer';
    name: string;
    salary: number;
    options: EmployeeOptions;

    constructor(name: string, salary: number, options: EmployeeOptions) {
        this.name = name;
        this.salary = salary;
        this.options = {
            programmingLanguages: options.programmingLanguages,
        };
    }
}