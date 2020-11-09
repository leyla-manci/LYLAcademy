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
import { Course } from '../models/Course';
import { AlertifyService } from './alertify.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  constructor(
    private httpClient: HttpClient,
    private alertifyService: AlertifyService,
    private router: Router
  ) {}

  //path = 'https://localhost:44378/api/';
  path = environment.baseUrl + '/';

  getCourses(): Observable<Course[]> {
    return this.httpClient.get<Course[]>(this.path + 'courses');
  }
  getCourseById(courseId): Observable<Course> {
    return this.httpClient.get<Course>(this.path + 'courses/' + courseId);
  }

  add(course) {
    this.httpClient.post(this.path + 'courses', course).subscribe((data) => {
      this.alertifyService.success('Course creation is successful!');
      this.router.navigateByUrl('/course');
    });
  }

  save(course){
    this.httpClient.put(this.path + 'courses/'+course.courseId,course).subscribe((data) => { 
      this.router.navigateByUrl('/course');
      this.alertifyService.success('course updated!');
    },
    (error) => {
        this.alertifyService.notify('Update process  failed.'+error, 'error');
      
    });
  }
  delete(courseId){
    return this.httpClient.delete(this.path + 'courses/'+courseId);
  }

}
