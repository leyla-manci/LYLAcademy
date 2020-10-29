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
      var i = 0;
      this.courses.forEach(element => {
        this.courses[i].description = this.courses[i].description.substring(0,20) + " ...";
        this.courses[i].duration = this.courses[i].duration.substring(0,10);
        i++;
      });
    });
  }

}
