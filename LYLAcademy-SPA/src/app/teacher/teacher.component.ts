import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Teacher } from '../models/Teacher';
import { AlertifyService } from '../services/alertify.service';
import { AuthService } from '../services/Auth.service';
import { TeacherService } from '../services/teacher.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss'],
  providers:[TeacherService]
})
export class TeacherComponent implements OnInit {


  constructor(
    private teacherService: TeacherService,
    private authService: AuthService,
    private router: Router,
    private alertifyService:AlertifyService
  ) {}

  teachers: Teacher[];
  ngOnInit() {
    this.refresh();
  }
  refresh() {
    if (!this.isAuthenticated) {
      this.router.navigateByUrl('/login');
    } else {
      this.teacherService.getTeachers().subscribe((data) => {
        this.teachers = data;
      });
    }
  }

  get isAuthenticated() {
    return this.authService.loggedIn();
  }
  delete(teacherId) {
    this.teacherService.delete(teacherId).subscribe((data) => { 
       this.alertifyService.success('Teacher deleted!');
     },
     (error) => {
         this.alertifyService.notify('delete process  failed.'+error, 'error');
       
     },
     ()=>{
      this.refresh();

     });
   
  }


}
