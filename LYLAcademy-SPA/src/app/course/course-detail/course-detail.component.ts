/*       Code with ❤  ´• ل •`   ❤
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
▬     Created by Leyla Akmancı                 ▬
▬     ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬    ▬
▬     leyla.manci@gmail.com                    ▬
▬     ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬    ▬
▬     ../11/2020 - ..:..                       ▬
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
 */
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/models/Course';
import { AlertifyService } from 'src/app/services/alertify.service';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss'],
  providers: [CourseService],
})
export class CourseDetailComponent implements OnInit {
  constructor(
    private courseService: CourseService,
    private formBuilder: FormBuilder,
    private alertifyService: AlertifyService,
    private activatedRoute: ActivatedRoute
  ) {}
  course: Course = new Course();
  courseEditForm: FormGroup;

  createCourseForm() {
    this.courseEditForm = this.formBuilder.group({
      courseId: [this.course.courseId],
      name: ['', Validators.required],
      duration: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
    });
  }
  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.getCourseById(params['courseId']);
    });
    this.createCourseForm();
  }

  save() {
    if (this.courseEditForm.valid) {
      this.courseService.save(this.course);
    }
  }

  getCourseById(courseId) {
    this.courseService.getCourseById(courseId).subscribe((data) => {
      this.course = data;
    });
  }
}
