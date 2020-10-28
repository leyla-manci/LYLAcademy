import { Component, OnInit } from '@angular/core';
import { Course } from '../models/Course';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private courseService: CourseService) {}
  courses: Course[] ;
  ngOnInit() {
    this.courseService.getCourses().subscribe((data) => {
      this.courses = data;
    });
  }

}
