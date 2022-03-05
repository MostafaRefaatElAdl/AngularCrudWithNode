import { Component, OnInit } from '@angular/core';
import { DepartmentService } from 'src/app/department.service';
import { Department } from 'src/app/_models/department';

@Component({
  selector: 'app-department-add',
  templateUrl: './department-add.component.html',
  styleUrls: ['./department-add.component.css']
})
export class DepartmentAddComponent implements OnInit {
  newDepartment:Department= new Department(0,"","");
  constructor(private stdSer:DepartmentService) { }
  
    ngOnInit(): void {
    }
  
    addDepartment(){
      this.stdSer.add(this.newDepartment).subscribe({
        next:a=>{this.newDepartment=a}
      })
    }

}
