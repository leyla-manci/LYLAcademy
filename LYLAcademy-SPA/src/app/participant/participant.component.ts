import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Calendar } from '../models/Calendar';
import { ParticipantAdd } from '../models/ParticipantAdd';
import { Student } from '../models/Student';
import { AlertifyService } from '../services/alertify.service';
import { AuthService } from '../services/Auth.service';
import { CalendarService } from '../services/calendar.service';
import { ParticipantService } from '../services/participant.service';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-participant',
  templateUrl: './participant.component.html',
  styleUrls: ['./participant.component.scss'],
  providers: [CalendarService, DatePipe, ParticipantService, StudentService],
})
export class ParticipantComponent implements OnInit {
  constructor(
    private calendarService: CalendarService,
    private authService: AuthService,
    private router: Router,
    private alertifyService: AlertifyService,
    private studentService: StudentService,
    private participantService: ParticipantService,
    public datepipe: DatePipe
  ) {}
  calendars: Calendar[] = [];
  calendarsAll: Calendar[] = [];
  participantAdd: ParticipantAdd = new ParticipantAdd();
  showOtherCourseList = false;
  isHideExpired = false;
  student: Student;
  dateFormat = 'dd MM yyyy';
  serachText = '';
  ngOnInit() {
    this.refresh();
  }
  refresh() {
    if (!this.isAuthenticated) {
      this.router.navigateByUrl('/login');
    } else {
      this.studentService
        .getStudentUserName(this.authService.userName())
        .subscribe((data) => {
          this.student = data;
          
          this.showMyList();
        });
    }
  }

  showMyList() {
    this.calendarService
      .getParticipantCalendar(this.student.studentId)
      .subscribe((data) => {
        this.calendars = data;
        this.calendarsAll = this.calendars;
        this.expiredFilter(this.isHideExpired);
      });

    this.showOtherCourseList = false;
  }
  setTextBeauty() {
    var i = 0;
    this.calendars.forEach((element) => {
      this.calendars[i].startDateStr = this.datepipe.transform(
        this.calendars[i].startDate,
        this.dateFormat
      );
      this.calendars[i].endDateStr = this.datepipe.transform(
        this.calendars[i].endDate,
        this.dateFormat
      );
      if(this.calendars[i].courseContent.length > 50){
        this.calendars[i].courseContent =
          this.calendars[i].courseContent.substring(0, 50) + ' ...';}
      i++;
    });
  }

  showOtherList() {
    this.calendarService
      .getCalendarToJoin(this.student.studentId)
      .subscribe((data) => {
        this.calendars = data;
        this.calendarsAll = this.calendars;
        this.expiredFilter(this.isHideExpired);
      });
    this.showOtherCourseList = true;
  }

  get isAuthenticated() {
    return this.authService.loggedIn();
  }

  joinCourse(calendarId, amount) {
    this.participantAdd.calendarId = calendarId;
    this.participantAdd.studentId = this.student.studentId;
    this.participantAdd.amount = amount;
    this.participantAdd.amountPaid = 0;
    this.participantAdd.amountRemain = this.participantAdd.amount;
    this.participantAdd.isDelete = 0;
    let dateTime = new Date();
    this.participantAdd.createDate = dateTime;
    this.participantAdd.updateDate = dateTime;
    this.participantService.add(this.participantAdd).subscribe((data) => {
      this.alertifyService.success('Participant creation is successful!');
      this.refresh();
    });
  }

  Filter(searchstring: string) {
    this.serachText = searchstring;
    searchstring = searchstring.trim();
    searchstring = searchstring.toLowerCase();
    let nowdateTime = new Date();
    this.calendars = this.calendarsAll.filter(
      (c) =>
        (c.courseContent.toLowerCase().includes(searchstring) ||
          c.startDateStr.toLowerCase().includes(searchstring) ||
          c.endDateStr.toLowerCase().includes(searchstring) ||
          c.course.name.toLowerCase().includes(searchstring) ||
          c.teacher.name.toLowerCase().includes(searchstring) ||
          c.price.toString().includes(searchstring)) &&
        ((this.isHideExpired && new Date(c.endDate) >= nowdateTime) ||
          !this.isHideExpired)
    );

    this.setTextBeauty();
  }

  expiredFilter(filterParam: boolean) {
    //filterParam
    this.isHideExpired = filterParam;
    /*
    if (!filterParam) {
      this.calendars = this.calendarsAll;
    } else {
      let nowdateTime = new Date();
      this.calendars = this.calendarsAll.filter(
        (c) => new Date(c.endDate) >= nowdateTime
      );
     this.setTextBeauty();}
    */
    this.Filter(this.serachText);
  }
}
