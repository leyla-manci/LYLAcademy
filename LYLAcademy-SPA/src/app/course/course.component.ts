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
  courses: Course[] = [];
  coursesAll: Course[] = [];
  ngOnInit() {
    this.refresh();
  }
  refresh() {
    if (!this.isAuthenticated) {
      this.router.navigateByUrl('/login');
    } else {
      this.courseService.getCourses().subscribe((data) => {
        this.courses = data;
        this.coursesAll = this.courses;
        this.setTextBeauty();
      });
    }
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
