import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'blog', loadChildren: './blog/blog.module#BlogModule'},
  {path: 'about', component: AboutUsComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'student', loadChildren: './student-dashboard/student-dashboard.module#StudentDashboardModule'},
  {path: 'teacher', loadChildren: './teacher-dashboard/teacher-dashboard.module#TeacherDashboardModule'},
  {path: 'admin', loadChildren: './admin-dashboard/admin-dashboard.module#AdminDashboardModule'},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
