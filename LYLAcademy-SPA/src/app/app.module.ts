import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { CourseComponent } from './course/course.component';
import { CourseDetailComponent } from './course/course-detail/course-detail.component';
import { CourseAddComponent } from './course/course-add/course-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertifyService } from './services/alertify.service';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { UserAddComponent } from './user/user-add/user-add.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { StudentComponent } from './student/student.component';
import { StudentAddComponent } from './student/student-add/student-add.component';
import { StudentDetailComponent } from './student/student-detail/student-detail.component';
import { TeacherComponent } from './teacher/teacher.component';
import { TeacherAddComponent } from './teacher/teacher-add/teacher-add.component';
import { TeacherDetailComponent } from './teacher/teacher-detail/teacher-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CourseComponent,
    CourseDetailComponent,
    CourseAddComponent,
    HomeComponent,
    LoginComponent,
    UserComponent,
    UserAddComponent,
    UserDetailComponent,
    StudentComponent,
    StudentAddComponent,
    StudentDetailComponent,
    TeacherComponent,
    TeacherAddComponent,
    TeacherDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [AlertifyService],
  bootstrap: [AppComponent],
})
export class AppModule {}
