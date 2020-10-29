import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Calendar } from '../models/Calendar';
import { AlertifyService } from '../services/alertify.service';
import { AuthService } from '../services/Auth.service';
import { CalendarService } from '../services/calendar.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  providers: [CalendarService],
})
export class CalendarComponent implements OnInit {
  constructor(
    private calendarService: CalendarService,
    private authService: AuthService,
    private router: Router,
    private alertifyService: AlertifyService
  ) {}
  calendars: Calendar[];
  ngOnInit() {
    this.refresh();
  }
  refresh() {
    if (!this.isAuthenticated) {
      this.router.navigateByUrl('/login');
    } else {
      this.calendarService.getCalendars().subscribe((data) => {
        this.calendars = data;
        var i = 0;
        this.calendars.forEach((element) => {
          this.calendars[i].courseContent = this.calendars[i].courseContent.substring(0, 20) + ' ...';
          i++;
        });
      });
    }
  }

  get isAuthenticated() {
    return this.authService.loggedIn();
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
}
