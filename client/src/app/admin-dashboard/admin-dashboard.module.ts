import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminDashboardRoutingModule } from './admin-dashboard-routing.module';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { TeacherDetailsComponent } from './teacher-details/teacher-details.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TeacherComponent } from './teacher/teacher.component';
import { AddTeacherComponent } from './add-teacher/add-teacher.component';

@NgModule({
  declarations: [AdminHomeComponent, TeacherDetailsComponent, SidebarComponent, TeacherComponent, AddTeacherComponent],
  imports: [
    CommonModule,
    AdminDashboardRoutingModule
  ]
})
export class AdminDashboardModule { }
