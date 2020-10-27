import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Course } from '../models/Course';
import { AlertifyService } from './alertify.service';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  constructor(
    private httpClient: HttpClient,
    private alertifyService: AlertifyService,
    private router: Router
  ) {}

  path = 'https://localhost:44378/api/';

  getCourses(): Observable<Course[]> {
    return this.httpClient.get<Course[]>(this.path + 'courses');
  }
  getCourseById(courseId): Observable<Course> {
    return this.httpClient.get<Course>(this.path + 'courses/' + courseId);
  }

  add(course) {
    this.httpClient.post(this.path + 'courses', course).subscribe((data) => {
      this.alertifyService.success('Course creation is successful!');
      this.router.navigateByUrl('courseDetail/'+data['courseId']);
    });
  }
}
