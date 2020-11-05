import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Calendar } from 'src/app/models/Calendar';
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
  selector: 'app-calendar-detail',
  templateUrl: './calendar-detail.component.html',
  styleUrls: ['./calendar-detail.component.scss'],
  providers: [CalendarService, DatePipe, ParticipantService, StudentService],
})
export class CalendarDetailComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private calendarService: CalendarService,
    private authService: AuthService,
    private router: Router,
    private alertifyService: AlertifyService,
    private studentService: StudentService,
    private participantService: ParticipantService,
    private teacherService:TeacherService,
    public datepipe: DatePipe
  ) {}
  calendarId = 0;
  isShowtoJoin = false;
  calendar: Calendar;
  participant: Participant;
  participantList: Participant[] = [];
  student: Student;
  teacher:Teacher;
  dateFormat = 'dd MM yyyy';

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.calendarId = params['calendarId'];
    });

    this.refresh(this.calendarId);
  }

  refresh(calendarId) {
    if (!this.isAuthenticated) {
      this.router.navigateByUrl('/login');
    } else {    
        this.getCalendar(calendarId);
    }
  }

  getCalendar(calendarId) {
    this.calendarService.getCalendarById(calendarId).subscribe(
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

  get isAuthenticated() {
    return this.authService.loggedIn();
  }

  
}
