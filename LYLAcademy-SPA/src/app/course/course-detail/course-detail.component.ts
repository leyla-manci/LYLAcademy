import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { Course } from 'src/app/models/Course';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss'],
  providers: [CourseService]
})
export class CourseDetailComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,private courseService:CourseService) { }
  course:Course;

  ngOnInit() {
    this.activatedRoute.params.subscribe(params =>{
      this.getCourseById(params["courseId"])
    })
  }

  getCourseById(courseId)
  {
    this.courseService.getCourseById(courseId).subscribe(data=>{
      this.course=data;
    });
  }

}
