import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { DepartmentService } from 'src/app/department.service';
import { Department } from 'src/app/_models/department';

@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.css']
})
export class DepartmentDetailsComponent implements OnInit {
  @Input()departmentDetail:Department|null=null;
  constructor(private stdSer:DepartmentService) { }
  ngOnChanges(changes: SimpleChanges): void {
  }
  

  ngOnInit(): void {
    
  }

}
