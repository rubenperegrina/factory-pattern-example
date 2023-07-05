import { Component } from '@angular/core';
import { EmployeeFactory } from '../../factories/employee.factory';
import { Employee } from '../../interfaces/employee.interface';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent {
  employees: Employee[];

  constructor() {
    this.employees = [
      EmployeeFactory.createEmployee('Developer', 'John Doe', 5000, { programmingLanguages: ['JavaScript', 'TypeScript'] }),
      EmployeeFactory.createEmployee('Designer', 'Jane Smith', 4500, { designTools: ['Sketch', 'Adobe Photoshop'] }),
      EmployeeFactory.createEmployee('Manager', 'David Johnson', 6000, { department: 'Marketing' }),
    ];
  }
}
