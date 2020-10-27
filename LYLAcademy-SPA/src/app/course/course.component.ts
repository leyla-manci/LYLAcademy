import { Component, OnInit } from '@angular/core';
import { Course } from '../models/Course';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
  providers: [CourseService]
})
export class CourseComponent implements OnInit {
  constructor(private courseService: CourseService) {}
  courses: Course[] ;
  ngOnInit() {
    this.courseService.getCourses().subscribe((data) => {
      this.courses = data;
    });
  }
}
