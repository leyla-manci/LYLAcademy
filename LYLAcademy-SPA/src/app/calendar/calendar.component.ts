import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Calendar } from '../models/Calendar';
import { Teacher } from '../models/Teacher';
import { AlertifyService } from '../services/alertify.service';
import { AuthService } from '../services/Auth.service';
import { CalendarService } from '../services/calendar.service';
import { ParticipantService } from '../services/participant.service';
import { TeacherService } from '../services/teacher.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  providers: [CalendarService, TeacherService, DatePipe, ParticipantService],
})
export class CalendarComponent implements OnInit {
  constructor(
    private calendarService: CalendarService,
    private authService: AuthService,
    private router: Router,
    private alertifyService: AlertifyService,
    private teacherService: TeacherService,
    private participantService: ParticipantService,
    public datepipe: DatePipe
  ) {}
  calendars: Calendar[];
  calendarsAll: Calendar[];
  showOtherCourseList = false;
  isHideExpired = false;
  teacher: Teacher;
  dateFormat = 'dd MM yyyy';
  serachText = '';
  ngOnInit() {
    this.refresh();
  }

  refresh() {
    if (!this.isAuthenticated) {
      this.router.navigateByUrl('/login');
    } else {
      this.showMyList();
    }
  }

  showMyList() {
    if (this.isAdminUser == '1') {
      this.calendarService.getCalendars().subscribe((data) => {
        this.calendars = data;
        this.calendarsAll = this.calendars;
        this.expiredFilter(this.isHideExpired);
      });
    } else {
      if (this.isTeacherUser == '1') {
        this.teacherService
          .getTeacherUserName(this.authService.userName())
          .subscribe((data) => {
            this.teacher = data;
            this.getCalendasForTeacher(this.teacher.teacherId);
          });
      }
    }
  }
  getCalendasForTeacher(teacherId) {
    this.calendarService.getTeacherCalendar(teacherId).subscribe((data) => {
      this.calendars = data;
      this.calendarsAll = this.calendars;
      this.expiredFilter(this.isHideExpired);
    });
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

  delete(calendarId) {
    this.calendarService.delete(calendarId).subscribe(
      (data) => {
        this.alertifyService.success('Calendar deleted!');
      },
      (error) => {
        this.alertifyService.notify('delete process  failed.' + error, 'error');
      },
      () => {
        this.refresh();
      }
    );
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
      this.calendars[i].courseContent =
        this.calendars[i].courseContent.substring(0, 50) + ' ...';
      i++;
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
