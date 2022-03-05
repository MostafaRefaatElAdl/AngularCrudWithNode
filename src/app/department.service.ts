import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Department } from './_models/department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  // private departments:Department[]=[
  //   new Department(1,"PD","mans"),
  //   new Department(2,"Open Source","alex"),
  //   new Department(3,"AI","smart")
  // ]
  constructor( public http:HttpClient) { }

  add(newDepartment : Department){
    return this.http.post<Department>("http://localhost:8080/department/add",newDepartment)
    // this.departments.push(new Department(newDepartment.Id,newDepartment.Name,newDepartment.Location))
  }
  
  getAllDepartments(){
    return this.http.get<Department[]>("http://localhost:8080/department/list");
  }
  
 getDepartmentById(id:number){
   return this.http.get<Department>(`http://localhost:8080/department/list/${id}`)
  }

  edit(editDepartment:Department){
    return this.http.put<Department>("http://localhost:8080/department/update",editDepartment);
  }

  deleteDepartment(id:number){
    return this.http.delete<Department>(`http://localhost:8080/department/delete/${id}`);
  }
}
