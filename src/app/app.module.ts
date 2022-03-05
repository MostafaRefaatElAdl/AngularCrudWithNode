import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentAddComponent } from './student/student-add/student-add.component';
import { StudentListComponent } from './student/student-list/student-list.component';
import { StudentEditComponent } from './student/student-edit/student-edit.component';
import { StudentDetailsComponent } from './student/student-details/student-details.component';
import { DepartmentDetailsComponent } from './department/department-details/department-details.component';
import { DepartmentAddComponent } from './department/department-add/department-add.component';
import { DepartmentListComponent } from './department/department-list/department-list.component';
import { DepartmentEditComponent } from './department/department-edit/department-edit.component';
import { DepartmentService } from './department.service';
import { StudentService } from './student.service';
import { FormsModule } from '@angular/forms';
import { DepartmentDeleteComponent } from './department/department-delete/department-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentAddComponent,
    StudentListComponent,
    StudentEditComponent,
    StudentDetailsComponent,
    DepartmentDetailsComponent,
    DepartmentAddComponent,
    DepartmentListComponent,
    DepartmentEditComponent,
    DepartmentDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,HttpClientModule
  ],
  providers: [DepartmentService,StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
