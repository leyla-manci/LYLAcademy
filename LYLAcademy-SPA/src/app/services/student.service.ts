import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Student } from '../models/Student';
import { AlertifyService } from './alertify.service';

@Injectable({
  providedIn: 'root'
})
export class StudentService {


  constructor(
    private httpClient: HttpClient,
    private alertifyService: AlertifyService,
    private router: Router) { }
  
  
    path = 'https://localhost:44378/api/';
  
    getStudents(): Observable<Student[]> {
      return this.httpClient.get<Student[]>(this.path + 'Students');
    }
    getStudentById(studentId): Observable<Student> {
      return this.httpClient.get<Student>(this.path + 'Students/' + studentId);
    }
    getStudentUserName(studentUserName): Observable<Student> {    
      return this.httpClient.get<Student>(this.path + 'Students/byUserName/' + studentUserName);
    }
  
    add(student) {
      this.httpClient.post(this.path + 'Students', student).subscribe((data) => {
      this.router.navigateByUrl('/student');
        this.alertifyService.success('Student creation is successful!');
          },
          (error) => {
              this.alertifyService.notify('Creation failed.'+error, 'error');
            
          });
    }
    save(student){
      this.httpClient.put(this.path + 'Students/'+student.studentId,student).subscribe((data) => { 
        this.router.navigateByUrl('/student');
        this.alertifyService.success('Student updated!');
      },
      (error) => {
          this.alertifyService.notify('Update process  failed.'+error, 'error');
        
      });
    }
    delete(studentId){
      return this.httpClient.delete(this.path + 'Students/'+studentId);
    }

}
