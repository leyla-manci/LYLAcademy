/*       Code with ❤  ´• ل •`   ❤
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
▬     Created by Leyla Akmancı                 ▬
▬     ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬    ▬
▬     leyla.manci@gmail.com                    ▬
▬     ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬    ▬
▬     ../11/2020 - ..:..                       ▬
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
 */
import { CourseComponent } from './course/course.component';
import { Routes } from '@angular/router';
import { CourseDetailComponent } from './course/course-detail/course-detail.component';
import { CourseAddComponent } from './course/course-add/course-add.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserAddComponent } from './user/user-add/user-add.component';
import { UserComponent } from './user/user.component';
import { StudentComponent } from './student/student.component';
import { StudentDetailComponent } from './student/student-detail/student-detail.component';
import { StudentAddComponent } from './student/student-add/student-add.component';
import { TeacherComponent } from './teacher/teacher.component';
import { TeacherDetailComponent } from './teacher/teacher-detail/teacher-detail.component';
import { TeacherAddComponent } from './teacher/teacher-add/teacher-add.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CalendarDetailComponent } from './calendar/calendar-detail/calendar-detail.component';
import { CalendarAddComponent } from './calendar/calendar-add/calendar-add.component';
import { NavComponent } from './nav/nav.component';
import { ParticipantComponent } from './participant/participant.component';
import { ParticipantDetailComponent } from './participant/participant-detail/participant-detail.component';
import { CalendarEditComponent } from './calendar/calendar-edit/calendar-edit.component';

export const appRoutes: Routes = [
  { path: 'course', component: CourseComponent },
  { path: 'courseDetail/:courseId', component: CourseDetailComponent },
  { path: 'courseAdd', component: CourseAddComponent },
  { path: 'user', component: UserComponent },
  { path: 'userDetail/:userId', component: UserDetailComponent },
  { path: 'userAdd', component: UserAddComponent },
  { path: 'teacher', component: TeacherComponent },
  { path: 'teacherDetail/:teacherId', component: TeacherDetailComponent },
  { path: 'teacherAdd', component: TeacherAddComponent },
  { path: 'student', component: StudentComponent },
  { path: 'studentDetail/:studentId', component: StudentDetailComponent },
  { path: 'studentAdd', component: StudentAddComponent },
  { path: 'participant', component: ParticipantComponent },  
  { path: 'participantDetail', component: ParticipantDetailComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'calendarDetail/:calendarId', component: CalendarDetailComponent },
  { path: 'calendarEdit/:calendarId', component: CalendarEditComponent },
  { path: 'calendarAdd', component: CalendarAddComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
