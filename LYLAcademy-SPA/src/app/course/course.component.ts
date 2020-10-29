import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from '../models/Course';
import { AlertifyService } from '../services/alertify.service';
import { AuthService } from '../services/Auth.service';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
  providers: [CourseService],
})
export class CourseComponent implements OnInit {
  constructor(
    private courseService: CourseService,
    private authService: AuthService,
    private router: Router,
    private alertifyService: AlertifyService
  ) {}
  courses: Course[];
  ngOnInit() {
    this.refresh();
  }
  refresh() {
    if (!this.isAuthenticated) {
      this.router.navigateByUrl('/login');
    } else {
      this.courseService.getCourses().subscribe((data) => {
        this.courses = data;
        var i = 0;
        this.courses.forEach((element) => {
          this.courses[i].description =
            this.courses[i].description.substring(0, 20) + ' ...';
          this.courses[i].duration = this.courses[i].duration.substring(0, 10);
          i++;
        });
      });
    }
  }

  get isAuthenticated() {
    return this.authService.loggedIn();
  }
  delete(courseId) {
    this.courseService.delete(courseId).subscribe(
      (data) => {
        this.alertifyService.success('Course deleted!');
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
