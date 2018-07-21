import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import {Employee} from '../shared/employee.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employeeList: Employee[];
  constructor(private employeeService: EmployeeService, private toastr: ToastrService) { }

  ngOnInit() {
    let x = this.employeeService.getData();
    x.snapshotChanges().subscribe((item) => {
      this.employeeList = [];
      item.forEach(Element => {
        let y = Element.payload.toJSON();
        y['$key'] = Element.key;
        this.employeeList.push(y as Employee);
      });
    });
  }

  onEdit(employee: Employee) {
    this.employeeService.selectedEmployee = Object.assign({}, employee);
  }

  onDelete(employee: Employee) {
    if (confirm('Are you sure to delete this record?') === true) {
    this.employeeService.deleteEmployee(employee);
      this.toastr.warning('Deleted Successfully', 'Employee Register');
    }
  }
}
