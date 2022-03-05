import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/student.service';
import { Student } from 'src/app/_models/student';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit {
newStudent:Student= new Student(0,"",0);
constructor(private stdSer:StudentService) { }

  ngOnInit(): void {
  }

  addStudent(){
    this.stdSer.add(this.newStudent);
  }
}
