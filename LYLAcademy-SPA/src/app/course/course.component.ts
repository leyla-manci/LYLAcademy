import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from '../models/Course';
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
    private router: Router
  ) {}
  courses: Course[];
  ngOnInit() {
    if (!this.isAuthenticated) {
      this.router.navigateByUrl('/login');
    } else {
      this.courseService.getCourses().subscribe((data) => {
        this.courses = data;
      });
    }
  }

  get isAuthenticated() {
    return this.authService.loggedIn();
  }
}
