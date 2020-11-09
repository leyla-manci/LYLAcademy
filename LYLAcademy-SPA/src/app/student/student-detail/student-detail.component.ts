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
import { Student } from 'src/app/models/Student';
import { UserName } from 'src/app/models/UserName';
import { AlertifyService } from 'src/app/services/alertify.service';
import { StudentService } from 'src/app/services/student.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.scss'],
  providers: [StudentService],
})
export class StudentDetailComponent implements OnInit {
  constructor(
    private studentService: StudentService,
    private userService: UserService,
    private formBuilder: FormBuilder,
    private alertifyService: AlertifyService,
    private activatedRoute: ActivatedRoute
  ) {}
  student: Student = new Student();
  studentEditForm: FormGroup;
  users: UserName[];

  createStudentForm() {
    this.studentEditForm = this.formBuilder.group({
      studentId: [this.student.studentId],
      name: ['', Validators.required],
      surname: ['', Validators.required],
      userName: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', Validators.required],
      isDelete: [this.student.isDelete],
    });
  }
  ngOnInit() {
    this.getUserNameList();
    this.activatedRoute.params.subscribe((params) => {
      this.getStudentById(params['studentId']);
    });
    this.createStudentForm();
  }
  getUserNameList() {
    this.userService.getUserByType(1).subscribe((data) => {
      this.users = data;
    });
  }

  save() {
    if (this.studentEditForm.valid) {
      this.studentService.save(this.student);
    }
  }

  getStudentById(studentId) {
    this.studentService.getStudentById(studentId).subscribe((data) => {
      this.student = data;
    });
  }
}
