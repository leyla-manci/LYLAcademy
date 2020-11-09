/*       Code with ❤  ´• ل •`   ❤
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
▬     Created by Leyla Akmancı                 ▬
▬     ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬    ▬
▬     leyla.manci@gmail.com                    ▬
▬     ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬    ▬
▬     ../11/2020 - ..:..                       ▬
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
 */import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { Course } from 'src/app/models/Course';

@Component({
  selector: 'app-course-add',
  templateUrl: './course-add.component.html',
  styleUrls: ['./course-add.component.scss'],
  providers: [CourseService],
})
export class CourseAddComponent implements OnInit {
  constructor(
    private courseService: CourseService,
    private formBuilder: FormBuilder
  ) {}
  course: Course;
  courseAddForm: FormGroup;

  createCourseForm() {
    this.courseAddForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      duration: ['', Validators.required],
      price: ['', Validators.required],
    });
  }
  ngOnInit() {
    this.createCourseForm();
  }

  add() {
    if (this.courseAddForm.valid) {
      this.course = Object.assign({}, this.courseAddForm.value);
      this.courseService.add(this.course);
    }
  }
}
