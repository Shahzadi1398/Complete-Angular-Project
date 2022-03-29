import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { EmployeeService } from '../../shared/employee.service';
import { DepartmentService } from 'src/app/shared/department.service';
import { NotificationService } from '../../shared/notification.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {


  constructor(public service: EmployeeService,
              public departmentService : DepartmentService,
              public notificationService : NotificationService,
              public dialogRef: MatDialogRef<EmployeeComponent>) { }
  
  ngOnInit() {
    this.service.getemployees();
  }
  onClear(){
    this.service.form.reset();
    this.service.initializeFormGroup();
    this.notificationService.success(':: Submitted successfully');
    
  }
  onSubmit(){
    if(this.service.form.valid){
      if(null)
      this.service.insertEmployee(this.service.form.value);
      else
      this.service.updateEmployee(this.service.form.value);
      this.service.form.reset();
      this.service.initializeFormGroup();
      this.notificationService.success(':: Submitted Successfully');
      this.onClose();
    }
  }
  onClose(){
    this.service.form.reset();
    this.service.initializeFormGroup();
    this.dialogRef.close();
  }
}
