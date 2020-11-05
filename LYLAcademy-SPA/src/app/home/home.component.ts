import { Component, OnInit } from '@angular/core';
import { Course } from '../models/Course';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private courseService: CourseService) {}
  courses: Course[] = [];
  coursesAll: Course[] = [];
  ngOnInit() {
    this.courseService.getCourses().subscribe((data) => {
      this.courses = data;
      this.coursesAll = this.courses;
      this.setTextBeauty();
    });
  }

  setTextBeauty() {
    var i = 0;
    this.courses.forEach((element) => {
      if(this.courses[i].description.length > 20){
        this.courses[i].description =
        this.courses[i].description.substring(0, 20) + ' ...';
      }
      this.courses[i].duration = this.courses[i].duration.substring(0, 10);
      i++;
    });
  }

  Filter(searchstring: string) {
    searchstring = searchstring.trim();
    searchstring = searchstring.toLowerCase();
    this.courses = this.coursesAll.filter(
      (c) =>
        c.description.toLowerCase().includes(searchstring) ||
        c.name.toLowerCase().includes(searchstring) ||
        c.duration.toLowerCase().includes(searchstring) ||
        c.price.toString().includes(searchstring)
    );

    this.setTextBeauty();
  }
}
