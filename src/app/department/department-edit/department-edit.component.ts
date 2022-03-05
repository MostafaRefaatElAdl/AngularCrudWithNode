import { Component, Input, OnInit } from '@angular/core';
import { DepartmentService } from 'src/app/department.service';
import { Department } from 'src/app/_models/department';

@Component({
  selector: 'app-department-edit',
  templateUrl: './department-edit.component.html',
  styleUrls: ['./department-edit.component.css']
})
export class DepartmentEditComponent implements OnInit {

  @Input()departmentToEdit:Department=new Department(0,"","");

  constructor(private stdSer:DepartmentService) { }

  ngOnInit(): void {
  }

  saveDepartment(){
    // this.stdSer.edit(this.departmentToEdit)
    this.stdSer.edit(this.departmentToEdit).subscribe({
      next:a=>(this.departmentToEdit=a)
    })
  }

}
