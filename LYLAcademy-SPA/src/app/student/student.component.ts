import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../models/Student';
import { AlertifyService } from '../services/alertify.service';
import { AuthService } from '../services/Auth.service';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss'],
  providers:[StudentService]
})
export class StudentComponent implements OnInit {

  constructor(
    private studentService: StudentService,
    private authService: AuthService,
    private router: Router,
    private alertifyService:AlertifyService
  ) {}

  students: Student[];
  ngOnInit() {
    this.refresh();
  }
  refresh() {
    if (!this.isAuthenticated) {
      this.router.navigateByUrl('/login');
    } else {
      this.studentService.getStudents().subscribe((data) => {
        this.students = data;
      });
    }
  }

  get isAuthenticated() {
    return this.authService.loggedIn();
  }
  delete(studentId) {
    this.studentService.delete(studentId).subscribe((data) => { 
       this.alertifyService.success('Student deleted!');
     },
     (error) => {
         this.alertifyService.notify('delete process  failed.'+error, 'error');
       
     },
     ()=>{
      this.refresh();

     });
   
  }

}
