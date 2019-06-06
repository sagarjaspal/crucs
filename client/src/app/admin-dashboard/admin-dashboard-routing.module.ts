import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { TeacherComponent } from './teacher/teacher.component';
import { AddTeacherComponent } from './add-teacher/add-teacher.component';
import { TeacherDetailsComponent } from './teacher-details/teacher-details.component'

const routes: Routes = [
  { path: '', component: AdminHomeComponent},
  { path: 'teacher', component: TeacherComponent},
  { path: 'teacher/addTeacher', component: AddTeacherComponent},
  { path: 'teacher/teacherDetails', component: TeacherDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminDashboardRoutingModule { }
