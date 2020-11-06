import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Calendar } from '../models/Calendar';
import { AlertifyService } from './alertify.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {


  constructor(
    private httpClient: HttpClient,
    private alertifyService: AlertifyService,
    private router: Router) { }
  
  
    //path = 'https://localhost:44378/api/';
    path = environment.baseUrl + '/';
  
    getCalendars(): Observable<Calendar[]> {
      return this.httpClient.get<Calendar[]>(this.path + 'Calendars');
    }
    getCalendarById(calendarId): Observable<Calendar> {
      return this.httpClient.get<Calendar>(this.path + 'Calendars/' + calendarId);
    }
    getParticipantCalendar(participantId): Observable<Calendar[]> {
      return this.httpClient.get<Calendar[]>(this.path + 'Calendars/byParticipant/' + participantId);
    }

    getTeacherCalendar(teacherId): Observable<Calendar[]> {
      return this.httpClient.get<Calendar[]>(this.path + 'Calendars/byTeacher/' + teacherId);
    }
    getCalendarToJoin(participantId): Observable<Calendar[]> {
      return this.httpClient.get<Calendar[]>(this.path + 'Calendars/toJoin/' + participantId);
    }
    add(calendar) {
      this.httpClient.post(this.path + 'Calendars', calendar).subscribe((data) => {
      this.router.navigateByUrl('/calendar');
        this.alertifyService.success('Calendar creation is successful!');
          },
          (error) => {
              this.alertifyService.notify('Creation failed.'+error, 'error');
            
          });
    }
    save(calendar){
      this.httpClient.put(this.path + 'Calendars/'+calendar.calendarId,calendar).subscribe((data) => { 
        this.router.navigateByUrl('/calendar');
        this.alertifyService.success('Calendar updated!');
      },
      (error) => {
          this.alertifyService.notify('Update process  failed.'+error, 'error');
        
      });
    }
    delete(calendarId){
      return this.httpClient.delete(this.path + 'Calendars/'+calendarId);
    }

   

}
