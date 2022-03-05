import { Component, Input, OnInit } from '@angular/core';
import { StudentService } from 'src/app/student.service';
import { Student } from 'src/app/_models/student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  students:Student[]=[];
  stdSelected:Student = new Student(0,"",0);
  constructor(private stdSer:StudentService) { }

  ngOnInit(): void {
    this.students=this.stdSer.getAllStudents();
  }
  
  getDetails(id:number){
    this.stdSelected = this.stdSer.getStudentById(id);

  }

}
