import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { StudentService } from 'src/app/student.service';
import { Student } from 'src/app/_models/student';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit,OnChanges {
  @Input()studentDetail:Student|null=null;
  constructor(private stdSer:StudentService) { }
  ngOnChanges(changes: SimpleChanges): void {
  }
  

  ngOnInit(): void {
    
  }

  
  

}
