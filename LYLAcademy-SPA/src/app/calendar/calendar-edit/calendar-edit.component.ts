import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Calendar } from 'src/app/models/Calendar';
import { Course } from 'src/app/models/Course';
import { Participant } from 'src/app/models/Participant';
import { Student } from 'src/app/models/Student';
import { Teacher } from 'src/app/models/Teacher';
import { AlertifyService } from 'src/app/services/alertify.service';
import { AuthService } from 'src/app/services/Auth.service';
import { CalendarService } from 'src/app/services/calendar.service';
import { ParticipantService } from 'src/app/services/participant.service';
import { StudentService } from 'src/app/services/student.service';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-calendar-edit',
  templateUrl: './calendar-edit.component.html',
  styleUrls: ['./calendar-edit.component.scss'],
  providers: [CalendarService, DatePipe, ParticipantService, StudentService],
})
export class CalendarEditComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private calendarService: CalendarService,
    private authService: AuthService,
    private router: Router,
    private alertifyService: AlertifyService,
    private studentService: StudentService,
    private participantService: ParticipantService,
    private teacherService: TeacherService,
    public datepipe: DatePipe
  ) {}
  calendarIdLocal = 0;
  isShowtoJoin = false;
  calendar: Calendar;
  participant: Participant;
  participantList: Participant[];
  student: Student;
  teacher: Teacher;
  dateFormat = 'dd MM yyyy';

  //calendarEditForm: FormGroup;

  ngOnInit() {
    this.calendar = new Calendar();
    this.calendar.course = new Course();
    this.calendar.teacher = new Teacher();
    this.activatedRoute.params.subscribe((params) => {
      this.calendarIdLocal = params['calendarId'];
    });

    this.refresh(this.calendarIdLocal);
    this.createCalendarForm();
  }

  createCalendarForm() {
   /* this.calendarEditForm = new FormGroup({
      calendarId: new FormControl(),
      courseContent: new FormControl(),
      amountPaid: new FormControl(),
    });*/
  }
  save() {
    this.calendarService.save(this.calendar);
  }
  calculateAmount(participantIndex) {
    this.calendar.participantList[participantIndex].amountRemain =
      this.calendar.participantList[participantIndex].amount -
      this.calendar.participantList[participantIndex].amountPaid;
  }
  refresh(calendarIdLocal) {
    if (!this.isAuthenticated) {
      this.router.navigateByUrl('/login');
    } else {
      this.getCalendar(calendarIdLocal);
    }
  }

  getCalendar(calendarIdLocal) {
    this.calendarService.getCalendarById(calendarIdLocal).subscribe(
      (data) => {
        this.calendar = data;
        this.calendar.participantCount = this.calendar.participantList.length;
        this.calendar.startDateStr = this.datepipe.transform(
          this.calendar.startDate,
          this.dateFormat
        );
        this.calendar.endDateStr = this.datepipe.transform(
          this.calendar.endDate,
          this.dateFormat
        );
      },
      (error) => {},
      () => {
        this.teacher = this.calendar.teacher;
      }
    );
  }
  get isAdminUser() {
    return this.authService.isAdmin();
  }

  get isAuthenticated() {
    return this.authService.loggedIn();
  }
}
