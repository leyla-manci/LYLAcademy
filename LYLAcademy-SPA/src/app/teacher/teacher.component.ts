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

  teachers: Teacher[] = [];
  teachersAll: Teacher[] = [];
  ngOnInit() {
    this.refresh();
  }
  refresh() {
    if (!this.isAuthenticated) {
      this.router.navigateByUrl('/login');
    } else {
      this.teacherService.getTeachers().subscribe((data) => {
        this.teachers = data;
        this.teachersAll = this.teachers;
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
  Filter(searchstring:string)
  {
    searchstring = searchstring.trim(); 
    searchstring = searchstring.toLowerCase();
    this.teachers =this.teachersAll.filter(c=>c.name.toLowerCase().includes(searchstring)
     || c.surname.toLowerCase().includes(searchstring)
     || c.qualification.toLowerCase().includes(searchstring)
     || c.compBranch.toLowerCase().includes(searchstring)
     || c.userName.toLowerCase().includes(searchstring));
  }

}
