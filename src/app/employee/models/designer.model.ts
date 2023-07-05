import { Employee, EmployeeOptions, EmployeeType } from "../interfaces/employee.interface";

export class Designer implements Employee {
    type: EmployeeType = 'Designer';
    name: string;
    salary: number;
    options: EmployeeOptions;

    constructor(name: string, salary: number, options: EmployeeOptions) {
        this.name = name;
        this.salary = salary;
        this.options = {
            designTools: options.designTools,
        };
    }
}