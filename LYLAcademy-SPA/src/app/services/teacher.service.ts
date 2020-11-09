/*       Code with ❤  ´• ل •`   ❤
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
▬     Created by Leyla Akmancı                 ▬
▬     ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬    ▬
▬     leyla.manci@gmail.com                    ▬
▬     ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬    ▬
▬     ../11/2020 - ..:..                       ▬
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
 */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Teacher } from '../models/Teacher';
import { AlertifyService } from './alertify.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor(
  private httpClient: HttpClient,
  private alertifyService: AlertifyService,
  private router: Router) { }


  //path = 'https://localhost:44378/api/';
  path = environment.baseUrl + '/';

  getTeachers(): Observable<Teacher[]> {
    return this.httpClient.get<Teacher[]>(this.path + 'Teachers');
  }
  getTeacherById(TeacherId): Observable<Teacher> {
    return this.httpClient.get<Teacher>(this.path + 'Teachers/' + TeacherId);
  }
  getTeacherUserName(teacherUserName): Observable<Teacher> {
    return this.httpClient.get<Teacher>(this.path + 'Teachers/byUserName/' + teacherUserName);
  }

  add(teacher) {
    this.httpClient.post(this.path + 'Teachers', teacher).subscribe((data) => {
    this.router.navigateByUrl('/teacher');
      this.alertifyService.success('Teacher creation is successful!');
        },
        (error) => {
            this.alertifyService.notify('Creation failed.'+error, 'error');
          
        });
  }
  save(teacher){
    this.httpClient.put(this.path + 'Teachers/'+teacher.teacherId,teacher).subscribe((data) => { 
      this.router.navigateByUrl('/teacher');
      this.alertifyService.success('Teacher updated!');
    },
    (error) => {
        this.alertifyService.notify('Update process  failed.'+error, 'error');
      
    });
  }
  delete(teacherId){
    return this.httpClient.delete(this.path + 'Teachers/'+teacherId);
  }

}
