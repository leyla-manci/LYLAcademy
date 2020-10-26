import { Component, OnInit } from '@angular/core';
import { Course } from '../models/Course';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
})
export class CourseComponent implements OnInit {
  constructor() {}
  courses: Course[];
  ngOnInit() {}
}
