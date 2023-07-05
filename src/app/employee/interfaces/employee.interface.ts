export interface Employee {
    options: EmployeeOptions;
    type: EmployeeType;
    name: string;
    salary: number;
}

export type EmployeeType = 'Developer' | 'Designer' | 'Manager';

export interface EmployeeOptions {
    programmingLanguages?: string[];
    designTools?: string[];
    department?: string;
  }