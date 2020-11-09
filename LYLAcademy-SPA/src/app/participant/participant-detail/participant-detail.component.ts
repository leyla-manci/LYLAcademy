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

@Component({
  selector: 'app-participant-detail',
  templateUrl: './participant-detail.component.html',
  styleUrls: ['./participant-detail.component.scss'],
  providers: [CalendarService, DatePipe, ParticipantService, StudentService],
})
export class ParticipantDetailComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private calendarService: CalendarService,
    private authService: AuthService,
    private router: Router,
    private alertifyService: AlertifyService,
    private studentService: StudentService,
    private participantService: ParticipantService,
    public datepipe: DatePipe
  ) {}
  calendarId = 0;
  isShowtoJoin = false;
  calendar: Calendar = new Calendar();
  participant: Participant = new Participant();
  student: Student = new Student();
  dateFormat = 'dd MM yyyy';

  ngOnInit() {
    this.calendar.course = new Course();
    this.calendar.teacher = new Teacher();
    this.activatedRoute.queryParams.subscribe((params) => {
      this.calendarId = params['calendarId'];
      if (params['showToJoin'] == 'false') {
        this.isShowtoJoin = false;
      } else {
        this.isShowtoJoin = true;
      }
      // this.isShowtoJoin = params['showToJoin'];
    });

    this.refresh(this.calendarId);
  }

  refresh(calendarId) {
    if (!this.isAuthenticated) {
      this.router.navigateByUrl('/login');
    } else {
      this.studentService
        .getStudentUserName(this.authService.userName())
        .subscribe((data) => {
          this.student = data;
          this.getCalendar(calendarId);
        });
    }
  }

  getCalendar(calendarId) {
    this.calendarService.getCalendarById(calendarId).subscribe(
      (data) => {
        this.calendar = data;
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
        if (!this.isShowtoJoin) {
          this.getParticipant(this.student.studentId);
        }
      }
    );
  }

  get isAuthenticated() {
    return this.authService.loggedIn();
  }

  getParticipant(studentId) {
    this.participant = this.calendar.participantList.find(
      (c) => c.studentId == studentId
    );
  }
}
