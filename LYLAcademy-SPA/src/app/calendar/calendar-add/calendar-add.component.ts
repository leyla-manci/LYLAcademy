/*       Code with ❤  ´• ل •`   ❤
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
▬     Created by Leyla Akmancı                 ▬
▬     ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬    ▬
▬     leyla.manci@gmail.com                    ▬
▬     ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬    ▬
▬     ../11/2020 - ..:..                       ▬
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
 */
import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Calendar } from 'src/app/models/Calendar';
import { CalendarAdd } from 'src/app/models/CalendarAdd';
import { Course } from 'src/app/models/Course';
import { Participant } from 'src/app/models/Participant';
import { Student } from 'src/app/models/Student';
import { Teacher } from 'src/app/models/Teacher';
import { AlertifyService } from 'src/app/services/alertify.service';
import { AuthService } from 'src/app/services/Auth.service';
import { CalendarService } from 'src/app/services/calendar.service';
import { CourseService } from 'src/app/services/course.service';
import { StudentService } from 'src/app/services/student.service';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-calendar-add',
  templateUrl: './calendar-add.component.html',
  styleUrls: ['./calendar-add.component.scss'],
  providers: [
    CalendarService,
    DatePipe,
    StudentService,
    TeacherService,
    CourseService,
  ],
})
export class CalendarAddComponent implements OnInit {
  constructor(
    private calendarService: CalendarService,
    private authService: AuthService,
    private router: Router,
    private alertifyService: AlertifyService,
    private courseService: CourseService,
    private teacherService: TeacherService,
    public datepipe: DatePipe
  ) {}
  isShowtoJoin = false;
  calendar: CalendarAdd;
  student: Student;
  teacher: Teacher;
  teacherList: Teacher[] = [];
  courseList: Course[] = [];
  dateFormat = 'dd MM yyyy';

  ngOnInit() {
    this.calendar = new CalendarAdd();
    this.calendar.course = new Course();
    this.calendar.teacher = new Teacher();
  
    this.refresh();
  }
  add() {
    // this.calendarService.save(this.calendar);
    this.calendar.createDate = new Date();
    this.calendar.updateDate = new Date();
    this.calendar.status = 1;
    var year = new Date(this.calendar.endDate);
    this.calendar.year =year.getFullYear().toString();
    this.calendarService.add(this.calendar);
  }

  setCourseValue(value) {
    if (value != null && value != '') {
      this.courseService.getCourseById(value).subscribe((c) => {
        this.calendar.course = c;
        this.calendar.courseId = c.courseId;
      });
    }
  }

  setTeacherValue(value) {
    if (value != null && value != '') {
      this.teacherService.getTeacherById(value).subscribe((t) => {
        this.calendar.teacher = t;
        this.calendar.teacherId = t.teacherId;
      });
    }
  }

  refresh() {
    if (!this.isAuthenticated) {
      this.router.navigateByUrl('/login');
    } else {
      this.getCalendar();
    }
  }

  getCalendar() {
    //get teacher list block start
    if (this.isAdminUser == '1') {
      this.teacherService.getTeachers().subscribe((data) => {
        this.teacherList = data;
      });
    } else {
      if (this.isTeacherUser == '1') {
       
        this.teacherService
          .getTeacherUserName(this.authService.userName())
          .subscribe((data) => {
            this.teacher = data;
            this.teacherList.push(data);
          });
      }
    }
    //get teacher list block end

    //get course list block start
    this.courseService.getCourses().subscribe((data) => {
      this.courseList = data;
    });
    //get course list block end
  }

  get isAuthenticated() {
    return this.authService.loggedIn();
  }
  get isAdminUser() {
    return this.authService.isAdmin();
  }
  get isTeacherUser() {
    return this.authService.isTeacher();
  }
}
