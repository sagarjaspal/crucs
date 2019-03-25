import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherDashboardRoutingModule } from './teacher-dashboard-routing.module';
import { TeacherHomeComponent } from './teacher-home/teacher-home.component';

@NgModule({
  declarations: [TeacherHomeComponent],
  imports: [
    CommonModule,
    TeacherDashboardRoutingModule
  ]
})
export class TeacherDashboardModule { }
