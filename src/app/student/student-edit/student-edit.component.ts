import { Component, Input, OnInit } from '@angular/core';
import { StudentService } from 'src/app/student.service';
import { Student } from 'src/app/_models/student';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {
  @Input()studentToEdit:Student=new Student(0,"",0);

  constructor(private stdSer:StudentService) { }

  ngOnInit(): void {
  }

  saveStudent(){
    this.stdSer.edit(this.studentToEdit)
  }
}
