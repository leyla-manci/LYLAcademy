import { CourseComponent } from './course/course.component';
import { Routes } from '@angular/router';
import { CourseDetailComponent } from './course/course-detail/course-detail.component';
import { CourseAddComponent } from './course/course-add/course-add.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserAddComponent } from './user/user-add/user-add.component';
import { UserComponent } from './user/user.component';

export const appRoutes: Routes = [
  { path: 'course', component: CourseComponent },
  { path: 'courseDetail/:courseId', component: CourseDetailComponent },
  { path: 'courseAdd', component: CourseAddComponent },
  { path: 'user', component: UserComponent },
  { path: 'userDetail/:userId', component: UserDetailComponent },
  { path: 'userAdd', component: UserAddComponent },
  { path: 'teacher', component: CourseComponent },
  { path: 'student', component: CourseComponent },
  { path: 'participant', component: CourseComponent },
  { path: 'calendar', component: CourseComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
