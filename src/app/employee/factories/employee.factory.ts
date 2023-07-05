import { Employee, EmployeeOptions, EmployeeType } from "../interfaces/employee.interface";
import { Designer } from "../models/designer.model";
import { Developer } from "../models/developer.model";
import { Manager } from "../models/manager.model";

export class EmployeeFactory {
    static createEmployee(type: EmployeeType, name: string, salary: number, options: EmployeeOptions): Employee {
        switch (type) {
            case 'Developer':
                return new Developer(name, salary, options);
            case 'Designer':
                return new Designer(name, salary, options);
            case 'Manager':
                return new Manager(name, salary, options);
            default:
                throw new Error('Invalid employee type');
        }
    }
}
