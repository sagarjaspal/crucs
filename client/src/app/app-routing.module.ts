import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'blog', loadChildren: './blog/blog.module#BlogModule'},
  {path: 'teacher', loadChildren: './teacher-dashboard/teacher-dashboard.module#TeacherDashboardModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
