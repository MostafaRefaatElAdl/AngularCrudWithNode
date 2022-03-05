import { Injectable } from '@angular/core';
import { Student } from './_models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private students:Student[]=[
    new Student(1,"Mostafa",26),
    new Student(2,"Mazen",24),
    new Student(3,"Kamel",25),
  ]
  constructor() { }
  // public getStudentDetails(id : number): number
  // {
  //     for(var i=0;i<this.students.length;i++){
  //       if(this.students[i].Id==id){
  //         return this.students[i].Id;
  //       }
  //   }
  //   return -1;
  // }

  add(newStudent : Student){
    this.students.push(new Student(newStudent.Id,newStudent.Name,newStudent.Age))
  }
  
  getAllStudents():Student[]{
    return this.students;
  }
  
  getStudentById(id:number):Student{
    for (let i = 0; i < this.students.length; i++) {
      if (this.students[i].Id==id) {
        return new Student(this.students[i].Id,this.students[i].Name,this.students[i].Age)
      }
    }
    return new Student(0,"",0);
  }
  edit(editStudent:Student){
    for (let i = 0; i < this.students.length; i++) {
      if (this.students[i].Id==editStudent.Id) {
        this.students[i].Name=editStudent.Name;
        this.students[i].Age=editStudent.Age;
      }
    }
  }
}
